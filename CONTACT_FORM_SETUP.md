# 📧 CONTACT FORM SETUP GUIDE FOR CPANEL

## Overview
Your contact form has been configured to use PHP mail functionality, which is standard on all cPanel hosting.

---

## ✅ What Has Been Done

1. **Created `contact-handler.php`** - Server-side form processor
2. **Updated `contact.html`** - Now uses AJAX to submit forms
3. **Features implemented:**
   - Form validation (client & server-side)
   - Email sent to: info@growthally.org
   - Auto-reply confirmation to customer
   - Success/error messages
   - Loading spinner during submission
   - Security measures (sanitization, validation)

---

## 🚀 DEPLOYMENT STEPS

### Step 1: Upload Files to cPanel
Upload both files to your public_html folder:
- `contact.html`
- `contact-handler.php`

### Step 2: Configure Email Settings in PHP File

Open `contact-handler.php` and update these lines:

```php
$to_email = "info@growthally.org"; // Your actual email
$from_email = "noreply@yourdomain.com"; // Change to noreply@growthally.org
```

**IMPORTANT:** The `$from_email` MUST be from your domain (e.g., noreply@growthally.org), otherwise emails may be blocked by spam filters.

### Step 3: Create Email Account in cPanel

1. Log into cPanel
2. Go to **Email Accounts**
3. Create email: `noreply@growthally.org`
4. Also verify `info@growthally.org` exists

### Step 4: Test the Contact Form

1. Visit your website: `https://yourdomain.com/contact.html`
2. Fill out the form
3. Submit
4. Check if:
   - ✅ Success message appears
   - ✅ Email received at info@growthally.org
   - ✅ Customer receives auto-reply

---

## 🔧 TROUBLESHOOTING

### Problem: Emails Not Being Received

**Solution 1: Check Spam Folder**
- Check your spam/junk folder
- Add noreply@yourdomain.com to contacts

**Solution 2: Verify PHP Mail Function**
Create a test file `test-email.php`:

```php
<?php
$to = "your-email@gmail.com";
$subject = "Test Email";
$message = "This is a test email from cPanel";
$headers = "From: noreply@yourdomain.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    echo "Email failed to send.";
}
?>
```

Upload and visit: `https://yourdomain.com/test-email.php`

**Solution 3: Enable PHP Mail in cPanel**
1. Go to cPanel > PHP Configuration
2. Ensure `mail()` function is enabled
3. Check that `sendmail_path` is configured

**Solution 4: Use SMTP Instead of PHP Mail**
If PHP mail doesn't work, use PHPMailer with SMTP (see Alternative Solution below)

### Problem: Getting 500 Error

**Solution:**
1. Check file permissions:
   - Files: 644
   - Directories: 755
2. Check PHP error logs in cPanel
3. Enable error reporting (temporarily):
   ```php
   error_reporting(E_ALL);
   ini_set('display_errors', 1);
   ```

---

## 🎯 ALTERNATIVE SOLUTIONS

### Option 2: PHPMailer with SMTP (More Reliable)

If PHP mail() doesn't work, use PHPMailer with SMTP:

**Setup Steps:**
1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer
2. Upload to your server
3. Configure with your email SMTP settings

This is more reliable but requires more setup.

### Option 3: Third-Party Form Services

Use services like:
- **Formspree** (https://formspree.io) - Free tier available
- **EmailJS** (https://www.emailjs.com) - Works with JavaScript only
- **Web3Forms** (https://web3forms.com) - Free, no backend needed

### Option 4: Use cPanel's Built-in Form Mail

cPanel includes FormMail CGI script:
1. Access via cPanel > FormMail
2. Configure and use their form template

---

## 🔐 SECURITY BEST PRACTICES

Your current setup includes:
- ✅ Input sanitization
- ✅ Email validation
- ✅ CSRF protection (method check)
- ✅ No file uploads (prevents malware)
- ✅ Rate limiting (recommended to add)

**Recommended: Add Rate Limiting**

Add this to the top of `contact-handler.php`:

```php
session_start();
$max_submissions = 3;
$time_window = 3600; // 1 hour

if (!isset($_SESSION['form_submissions'])) {
    $_SESSION['form_submissions'] = [];
}

$current_time = time();
$_SESSION['form_submissions'] = array_filter(
    $_SESSION['form_submissions'],
    function($time) use ($current_time, $time_window) {
        return ($current_time - $time) < $time_window;
    }
);

if (count($_SESSION['form_submissions']) >= $max_submissions) {
    echo json_encode([
        'success' => false,
        'message' => 'Too many submissions. Please try again later.'
    ]);
    exit;
}

$_SESSION['form_submissions'][] = $current_time;
```

---

## 📊 MONITORING & ANALYTICS

**Track Form Submissions:**

1. **Save to Database** (Optional but recommended):
   - Create MySQL database in cPanel
   - Store all form submissions
   - Backup in case emails fail

2. **Google Analytics Events**:
   Add to contact.html after successful submission:
   ```javascript
   gtag('event', 'form_submission', {
       'event_category': 'Contact',
       'event_label': 'Contact Form'
   });
   ```

3. **Email Notifications**:
   - Current setup sends to info@growthally.org
   - You can add multiple recipients:
     ```php
     $to_email = "info@growthally.org, sales@growthally.org";
     ```

---

## ✨ FEATURES YOU CAN ADD LATER

1. **reCAPTCHA** - Prevent spam bots
2. **File Upload** - Allow CV/document uploads
3. **Database Storage** - Keep records of all inquiries
4. **Admin Dashboard** - View submissions online
5. **Email Templates** - HTML formatted emails
6. **SMS Notifications** - Get SMS when form submitted
7. **Calendar Integration** - Auto-schedule meetings
8. **CRM Integration** - Send leads to Salesforce/HubSpot

---

## 📝 TESTING CHECKLIST

Before going live:

- [ ] Form submits without errors
- [ ] Email received at info@growthally.org
- [ ] Customer receives auto-reply
- [ ] Success message displays correctly
- [ ] Error message displays if server fails
- [ ] Form resets after successful submission
- [ ] All required fields are validated
- [ ] Email validation works correctly
- [ ] Form works on mobile devices
- [ ] No console errors in browser
- [ ] Spam folder checked
- [ ] Test from multiple devices/browsers

---

## 🆘 QUICK HELP

**Common Issues:**

| Issue | Quick Fix |
|-------|-----------|
| No email received | Check spam folder, verify email exists |
| 500 Error | Check file permissions (644) |
| Form not submitting | Check browser console for errors |
| Auto-reply not working | Verify from_email is from your domain |
| Emails going to spam | Add SPF/DKIM records in cPanel |

---

## 📞 SUPPORT

If you continue to have issues:

1. **Check cPanel Email Logs**:
   - cPanel > Track Delivery
   - See if emails are being sent

2. **Contact Hosting Support**:
   - Ask them to check PHP mail configuration
   - Request SMTP details if mail() doesn't work

3. **Test with Different Email**:
   - Try sending to Gmail, Yahoo, Outlook
   - See which ones receive emails

---

**Status:** ✅ Ready for deployment
**Last Updated:** December 31, 2025
**Version:** 1.0

