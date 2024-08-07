import nodemailer from 'nodemailer';
import 'dotenv/config'; // Ensure this is present for environment variables

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'test-recipient@example.com', // Replace with your test recipient's email
  subject: 'Test Email',
  text: 'This is a test email sent using Nodemailer.',
};

async function sendTestEmail() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendTestEmail();
