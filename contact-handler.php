<?php
// Prevent direct access
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    exit("Method Not Allowed");
}

// Set content type
header('Content-Type: application/json');

// Enable error reporting for debugging (disable in production)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Configuration
$to_email = "info@growthally.org"; // Your email address
$from_email = "noreply@growthally.org"; // Should be from your domain
$subject_prefix = "Growthally Website Inquiry";

// Sanitize and validate input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Get and sanitize form data
$name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$phone = isset($_POST['phone']) ? sanitize_input($_POST['phone']) : '';
$company = isset($_POST['company']) ? sanitize_input($_POST['company']) : 'Not specified';
$service = isset($_POST['service']) ? sanitize_input($_POST['service']) : '';
$callback_time = isset($_POST['callback_time']) ? sanitize_input($_POST['callback_time']) : 'Not specified';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = "Name is required";
}

if (empty($email)) {
    $errors[] = "Email is required";
} elseif (!validate_email($email)) {
    $errors[] = "Invalid email format";
}

if (empty($phone)) {
    $errors[] = "Phone number is required";
}

if (empty($service)) {
    $errors[] = "Service selection is required";
}

if (empty($message)) {
    $errors[] = "Message is required";
}

// If there are validation errors
if (!empty($errors)) {
    echo json_encode([
        'success' => false,
        'message' => implode(", ", $errors)
    ]);
    exit;
}

// Prepare email content
$email_subject = "$subject_prefix - $service - $name";

$email_body = "
===============================================
NEW INQUIRY FROM GROWTHALLY WEBSITE
===============================================

CONTACT DETAILS:
----------------
Name: $name
Email: $email
Phone: $phone
Company: $company

SERVICE INQUIRY:
----------------
Service Interested: $service
Preferred Callback Time: $callback_time

MESSAGE:
--------
$message

===============================================
Submitted on: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "
===============================================
";

// Email headers
$headers = array();
$headers[] = "From: Growthally Website <$from_email>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// Send email
$mail_sent = mail($to_email, $email_subject, $email_body, implode("\r\n", $headers));

// Send auto-reply to customer
if ($mail_sent) {
    $customer_subject = "Thank you for contacting Growthally Advisors";
    $customer_body = "
Dear $name,

Thank you for reaching out to Growthally Advisors!

We have received your inquiry regarding $service and our team will get back to you shortly.

Your Details:
Name: $name
Email: $email
Phone: $phone
Service: $service

One of our advisors will contact you within 24 hours.

Best regards,
Growthally Advisors Team

---
This is an automated confirmation email. Please do not reply to this email.
For immediate assistance, call us at +91-75062-36027
Visit us: https://www.growthally.org
";

    $customer_headers = array();
    $customer_headers[] = "From: Growthally Advisors <$from_email>";
    $customer_headers[] = "Reply-To: Growthally Advisors <$to_email>";
    $customer_headers[] = "MIME-Version: 1.0";
    $customer_headers[] = "Content-Type: text/plain; charset=UTF-8";
    
    mail($email, $customer_subject, $customer_body, implode("\r\n", $customer_headers));
}

// Response
if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. We will contact you soon.'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly at info@growthally.org'
    ]);
}
?>

