// ============================================================
// McDallars Ventures – server.js
// FIXED: Email now works correctly
// ============================================================
//
// ════════════════════════════════════════════════════════════
//  SETUP STEPS (read this once before running):
// ════════════════════════════════════════════════════════════
//
//  STEP 1 — Fill in your real email details below (CONFIG section)
//
//  STEP 2 — Get a Gmail App Password (NOT your login password):
//    a) Go to: https://myaccount.google.com/security
//    b) Turn on "2-Step Verification" if not already on
//    c) Search for "App Passwords" in that page
//    d) Select app: "Mail", device: "Other" → name it "McDallars"
//    e) Google gives you a 16-character password like: abcd efgh ijkl mnop
//    f) Remove the spaces → "abcdefghijklmnop" → paste it as EMAIL_PASS below
//
//  STEP 3 — Install packages:
//    npm install express nodemailer cors
//
//  STEP 4 — Run the server:
//    node server.js
//
//  STEP 5 — Test your email is working:
//    Open in browser: http://localhost:3000/test-email
//    You should receive a test email within a few seconds.
//
// ════════════════════════════════════════════════════════════

const express    = require('express');
const nodemailer = require('nodemailer');
const cors       = require('cors');
const fs         = require('fs');
const path       = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ════════════════════════════════════════════════════════════
//  ★ CONFIG — FILL IN YOUR REAL DETAILS HERE ★
// ════════════════════════════════════════════════════════════
const CONFIG = {

  // The email address where you want to RECEIVE orders & messages
  ADMIN_EMAIL: 'christopheregyir83@gmail.com',        // ← change to your real email

  // Your Gmail address that SENDS the emails
  EMAIL_USER: 'christopheregyir83@gmail.com',        // ← change to your Gmail

  // Your 16-character Gmail App Password (NOT your login password)
  // Get it from: myaccount.google.com → Security → App Passwords
  EMAIL_PASS: 'kxjcbumistzslynr',           // ← paste your App Password here

  // Business details (used in emails)
  BUSINESS_NAME:  'McDallars Ventures',
  BUSINESS_PHONE: '(+233) 244 361 385',
  BUSINESS_ADDR:  'Komenda Junction, Central Region, Ghana',
  WHATSAPP_NUM:   '233244361385',           // international format, no +

  // Data storage files
  ordersFile:   path.join(__dirname, 'orders.json'),
  messagesFile: path.join(__dirname, 'messages.json'),
};
// ════════════════════════════════════════════════════════════

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ── EMAIL TRANSPORTER ─────────────────────────────────────
// Using Gmail SMTP directly (more reliable than 'service: gmail')
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,           // true for port 465, false for 587
  auth: {
    user: CONFIG.EMAIL_USER,
    pass: CONFIG.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,   // avoids TLS issues on some servers
  },
});

// Verify connection on startup
transporter.verify(function(error, success) {
  if (error) {
    console.error('\n❌ EMAIL SETUP ERROR:', error.message);
    console.error('   ► Check your EMAIL_USER and EMAIL_PASS in server.js');
    console.error('   ► Make sure you used a Gmail App Password, not your login password\n');
  } else {
    console.log('✅ Email transporter ready — emails will be delivered!');
  }
});

// ── FILE HELPERS ──────────────────────────────────────────
function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return []; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

// ── SHARED EMAIL STYLES ───────────────────────────────────
function buildEmailWrapper(bodyHtml) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:20px;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
<div style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.1);">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#1A3C5E 0%,#0f2640 100%);padding:32px 28px;text-align:center;">
    <h1 style="margin:0;font-size:28px;color:#FF6B35;font-family:Georgia,serif;letter-spacing:1px;">${CONFIG.BUSINESS_NAME}</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:12px;letter-spacing:2px;text-transform:uppercase;">${CONFIG.BUSINESS_ADDR}</p>
  </div>

  <!-- Body -->
  <div style="padding:32px 28px;">
    ${bodyHtml}
  </div>

  <!-- Footer -->
  <div style="background:#f8f9fc;padding:18px 28px;border-top:1px solid #eee;text-align:center;">
    <p style="margin:0;font-size:12px;color:#999;">
      ${CONFIG.BUSINESS_NAME} &nbsp;|&nbsp; ${CONFIG.BUSINESS_PHONE} &nbsp;|&nbsp; ${CONFIG.BUSINESS_ADDR}
    </p>
  </div>

</div>
</body>
</html>`;
}

// ── TEST EMAIL ROUTE ──────────────────────────────────────
// Visit http://localhost:3000/test-email to check if email works
app.get('/test-email', async (req, res) => {
  const html = buildEmailWrapper(`
    <h2 style="color:#1A3C5E;margin-top:0;">✅ Email Test Successful!</h2>
    <p style="color:#555;line-height:1.7;">
      If you received this email, your McDallars Ventures server is correctly
      configured to send order notifications and contact messages.
    </p>
    <div style="background:#fff8f5;border-left:4px solid #FF6B35;padding:14px 18px;border-radius:8px;margin:20px 0;font-size:14px;">
      <strong>Sending from:</strong> ${CONFIG.EMAIL_USER}<br/>
      <strong>Sending to:</strong> ${CONFIG.ADMIN_EMAIL}<br/>
      <strong>Time:</strong> ${new Date().toLocaleString('en-GH')}
    </div>
    <p style="color:#555;font-size:14px;">Your website is ready to receive orders! 🎉</p>
  `);

  try {
    await transporter.sendMail({
      from:    `"${CONFIG.BUSINESS_NAME}" <${CONFIG.EMAIL_USER}>`,
      to:      CONFIG.ADMIN_EMAIL,
      subject: `✅ Test Email — McDallars Ventures Server is Working`,
      html,
    });
    res.send(`
      <div style="font-family:Arial;text-align:center;padding:60px 20px;">
        <h1 style="color:#10b981;">✅ Test Email Sent!</h1>
        <p>Check your inbox at <strong>${CONFIG.ADMIN_EMAIL}</strong></p>
        <p style="color:#666;">If it doesn't arrive in 2 minutes, check your spam folder or verify your App Password.</p>
        <a href="/" style="background:#FF6B35;color:white;padding:12px 24px;border-radius:50px;text-decoration:none;font-weight:bold;display:inline-block;margin-top:16px;">← Back to Website</a>
      </div>`);
  } catch (err) {
    console.error('Test email error:', err);
    res.status(500).send(`
      <div style="font-family:Arial;text-align:center;padding:60px 20px;">
        <h1 style="color:#ef4444;">❌ Email Failed</h1>
        <p><strong>Error:</strong> ${err.message}</p>
        <h3>Common fixes:</h3>
        <ul style="text-align:left;max-width:500px;margin:0 auto;color:#555;">
          <li>Make sure you used a <strong>Gmail App Password</strong>, not your regular login password</li>
          <li>Check that 2-Step Verification is ON for your Google account</li>
          <li>Confirm EMAIL_USER and EMAIL_PASS are correct in server.js</li>
          <li>Make sure "Less secure app access" is not the method — use App Passwords instead</li>
        </ul>
        <a href="/test-email" style="background:#FF6B35;color:white;padding:12px 24px;border-radius:50px;text-decoration:none;font-weight:bold;display:inline-block;margin-top:24px;">Try Again</a>
      </div>`);
  }
});

// ── ORDER ENDPOINT ────────────────────────────────────────
app.post('/api/order', async (req, res) => {
  const { customer, items, total, date } = req.body;

  // Validate required fields
  if (!customer?.name || !customer?.phone || !customer?.address) {
    return res.status(400).json({ success: false, message: 'Missing required fields: name, phone, address.' });
  }
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Order has no items.' });
  }

  // Save order to file
  const orders = readJSON(CONFIG.ordersFile);
  const order = {
    id:        Date.now(),
    customer,
    items,
    total,
    date,
    status:    'pending',
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  writeJSON(CONFIG.ordersFile, orders);
  console.log(`📦 Order #${order.id} saved — ${customer.name} | GHS ${total}`);

  // Build items table rows
  const itemsRows = items.map(i => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;font-size:13px;color:#333;">${i.name}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;text-align:center;font-size:13px;color:#333;">${i.qty}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #f0f0f0;text-align:right;font-size:13px;font-weight:700;color:#FF6B35;">GHS ${(i.price * i.qty).toFixed(2)}</td>
    </tr>`).join('');

  const paymentLabel = customer.payment === 'mobile_money' ? '📱 Mobile Money' : '💵 Pay on Delivery';
  const waLink = `https://wa.me/${CONFIG.WHATSAPP_NUM}?text=Hello%20${encodeURIComponent(customer.name)}%2C%20your%20McDallars%20order%20%23${order.id}%20has%20been%20received!%20We%20will%20contact%20you%20soon.`;

  const emailBody = `
    <!-- Alert banner -->
    <div style="background:#fff8f5;border:1.5px solid #FF6B35;border-radius:10px;padding:16px 20px;margin-bottom:28px;text-align:center;">
      <p style="margin:0;font-size:15px;font-weight:700;color:#FF6B35;">🛍️ New Order Received — #${order.id}</p>
      <p style="margin:6px 0 0;font-size:12px;color:#888;">${date}</p>
    </div>

    <!-- Customer Details -->
    <h2 style="color:#1A3C5E;font-size:16px;font-weight:700;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #FF6B35;">
      👤 Customer Details
    </h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
      <tr style="background:#f8f9fc;">
        <td style="padding:10px 14px;font-size:13px;color:#888;width:130px;font-weight:600;">Full Name</td>
        <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#1A3C5E;">${customer.name}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-size:13px;color:#888;font-weight:600;">Phone</td>
        <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#FF6B35;">
          <a href="tel:${customer.phone}" style="color:#FF6B35;text-decoration:none;">${customer.phone}</a>
        </td>
      </tr>
      <tr style="background:#f8f9fc;">
        <td style="padding:10px 14px;font-size:13px;color:#888;font-weight:600;">Address</td>
        <td style="padding:10px 14px;font-size:13px;color:#333;">${customer.address}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-size:13px;color:#888;font-weight:600;">Payment</td>
        <td style="padding:10px 14px;font-size:13px;color:#333;">${paymentLabel}</td>
      </tr>
      ${customer.notes ? `
      <tr style="background:#f8f9fc;">
        <td style="padding:10px 14px;font-size:13px;color:#888;font-weight:600;vertical-align:top;">Notes</td>
        <td style="padding:10px 14px;font-size:13px;color:#333;font-style:italic;">${customer.notes}</td>
      </tr>` : ''}
    </table>

    <!-- Order Items -->
    <h2 style="color:#1A3C5E;font-size:16px;font-weight:700;margin:0 0 14px;padding-bottom:10px;border-bottom:2px solid #FF6B35;">
      🛍️ Order Items
    </h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:0;">
      <thead>
        <tr style="background:#1A3C5E;">
          <th style="padding:12px 14px;text-align:left;font-size:12px;color:rgba(255,255,255,0.8);text-transform:uppercase;letter-spacing:1px;">Product</th>
          <th style="padding:12px 14px;text-align:center;font-size:12px;color:rgba(255,255,255,0.8);text-transform:uppercase;letter-spacing:1px;">Qty</th>
          <th style="padding:12px 14px;text-align:right;font-size:12px;color:rgba(255,255,255,0.8);text-transform:uppercase;letter-spacing:1px;">Price</th>
        </tr>
      </thead>
      <tbody>${itemsRows}</tbody>
      <tfoot>
        <tr style="background:#fff8f5;border-top:2px solid #FF6B35;">
          <td colspan="2" style="padding:14px;font-size:15px;font-weight:700;color:#1A3C5E;">TOTAL</td>
          <td style="padding:14px;text-align:right;font-size:20px;font-weight:700;color:#FF6B35;">GHS ${total}</td>
        </tr>
      </tfoot>
    </table>

    <!-- Action buttons -->
    <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap;">
      <a href="tel:${customer.phone}"
         style="display:inline-block;background:#1A3C5E;color:white;padding:12px 22px;border-radius:50px;font-size:13px;font-weight:700;text-decoration:none;">
        📞 Call Customer
      </a>
      <a href="${waLink}" target="_blank"
         style="display:inline-block;background:#25D366;color:white;padding:12px 22px;border-radius:50px;font-size:13px;font-weight:700;text-decoration:none;">
        💬 WhatsApp Customer
      </a>
    </div>`;

  // Send email to admin
  try {
    await transporter.sendMail({
      from:    `"${CONFIG.BUSINESS_NAME} Orders" <${CONFIG.EMAIL_USER}>`,
      to:      CONFIG.ADMIN_EMAIL,
      subject: `🛍️ New Order #${order.id} — GHS ${total} from ${customer.name}`,
      html:    buildEmailWrapper(emailBody),
    });
    console.log(`✅ Order email sent to ${CONFIG.ADMIN_EMAIL}`);
  } catch (err) {
    console.error('❌ Order email FAILED:', err.message);
    // Order is still saved to file even if email fails
  }

  res.json({ success: true, message: 'Order received!', orderId: order.id });
});

// ── CONTACT ENDPOINT ──────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message, date } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }

  // Save message to file
  const messages = readJSON(CONFIG.messagesFile);
  const msg = {
    id:        Date.now(),
    name, email, phone,
    subject, message, date,
    read:      false,
    createdAt: new Date().toISOString(),
  };
  messages.push(msg);
  writeJSON(CONFIG.messagesFile, messages);
  console.log(`📬 Contact message saved from ${name} (${email})`);

  const emailBody = `
    <!-- Alert -->
    <div style="background:#f0f9ff;border:1.5px solid #1A3C5E;border-radius:10px;padding:16px 20px;margin-bottom:28px;text-align:center;">
      <p style="margin:0;font-size:15px;font-weight:700;color:#1A3C5E;">📬 New Website Message</p>
      <p style="margin:6px 0 0;font-size:12px;color:#888;">${date}</p>
    </div>

    <!-- Sender Info -->
    <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
      <tr style="background:#f8f9fc;">
        <td style="padding:10px 14px;font-size:13px;color:#888;width:100px;font-weight:600;">Name</td>
        <td style="padding:10px 14px;font-size:14px;font-weight:700;color:#1A3C5E;">${name}</td>
      </tr>
      <tr>
        <td style="padding:10px 14px;font-size:13px;color:#888;font-weight:600;">Email</td>
        <td style="padding:10px 14px;font-size:13px;">
          <a href="mailto:${email}" style="color:#FF6B35;text-decoration:none;">${email}</a>
        </td>
      </tr>
      ${phone ? `<tr style="background:#f8f9fc;"><td style="padding:10px 14px;font-size:13px;color:#888;font-weight:600;">Phone</td><td style="padding:10px 14px;font-size:13px;color:#333;">${phone}</td></tr>` : ''}
      ${subject ? `<tr><td style="padding:10px 14px;font-size:13px;color:#888;font-weight:600;">Subject</td><td style="padding:10px 14px;font-size:13px;font-weight:600;color:#333;">${subject}</td></tr>` : ''}
    </table>

    <!-- Message body -->
    <h3 style="color:#1A3C5E;font-size:14px;margin:0 0 12px;">Message:</h3>
    <div style="background:#f8f9fc;border-left:4px solid #FF6B35;border-radius:8px;padding:18px 20px;font-size:14px;color:#333;line-height:1.75;">
      ${message.replace(/\n/g, '<br>')}
    </div>
    <p style="margin-top:20px;font-size:12px;color:#aaa;">
      💡 Reply directly to this email to respond to ${name}.
    </p>`;

  try {
    await transporter.sendMail({
      from:    `"${CONFIG.BUSINESS_NAME} Website" <${CONFIG.EMAIL_USER}>`,
      to:      CONFIG.ADMIN_EMAIL,
      replyTo: email,
      subject: `📬 Contact from ${name}${subject ? ': ' + subject : ''}`,
      html:    buildEmailWrapper(emailBody),
    });
    console.log(`✅ Contact email sent to ${CONFIG.ADMIN_EMAIL}`);
  } catch (err) {
    console.error('❌ Contact email FAILED:', err.message);
  }

  res.json({ success: true, message: 'Message received!' });
});

// ── ADMIN ROUTES ──────────────────────────────────────────
app.get('/admin/orders', (req, res) => {
  const orders = readJSON(CONFIG.ordersFile);
  res.json({ count: orders.length, orders: [...orders].reverse() });
});

app.get('/admin/messages', (req, res) => {
  const messages = readJSON(CONFIG.messagesFile);
  res.json({ count: messages.length, messages: [...messages].reverse() });
});

app.put('/admin/orders/:id', (req, res) => {
  const orders = readJSON(CONFIG.ordersFile);
  const idx = orders.findIndex(o => o.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ success: false, message: 'Order not found.' });
  orders[idx].status    = req.body.status || orders[idx].status;
  orders[idx].updatedAt = new Date().toISOString();
  writeJSON(CONFIG.ordersFile, orders);
  res.json({ success: true, order: orders[idx] });
});

app.get('/admin/dashboard', (req, res) => {
  const orders   = readJSON(CONFIG.ordersFile);
  const messages = readJSON(CONFIG.messagesFile);
  const revenue  = orders.reduce((sum, o) => sum + parseFloat(o.total || 0), 0);
  res.json({
    totalOrders:    orders.length,
    pendingOrders:  orders.filter(o => o.status === 'pending').length,
    totalRevenue:   'GHS ' + revenue.toFixed(2),
    totalMessages:  messages.length,
    unreadMessages: messages.filter(m => !m.read).length,
  });
});

// ── START SERVER ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🛍️  ${CONFIG.BUSINESS_NAME} Server Running`);
  console.log(`🌐  Website:    http://localhost:${PORT}`);
  console.log(`📧  Test email: http://localhost:${PORT}/test-email`);
  console.log(`📋  Orders:     http://localhost:${PORT}/admin/orders`);
  console.log(`✉️   Messages:   http://localhost:${PORT}/admin/messages`);
  console.log(`📊  Dashboard:  http://localhost:${PORT}/admin/dashboard`);
  console.log(`\n   Admin email: ${CONFIG.ADMIN_EMAIL}`);
  console.log(`   Sending via: ${CONFIG.EMAIL_USER}\n`);
});
