// src/features/notifications/email/services/email.service.ts
import { transporter } from '../../../../config/email.config';

export async function sendPasswordResetEmail(email: string, name: string, recoveryLink: string) {
  const html = `
    <h2>Hi ${name || ''},</h2>
    <p>You requested a password reset. Click the link below to reset your password:</p>
    <a href="${recoveryLink}">Reset Password</a>
    <p>If you didn’t request this, just ignore this email.</p>
  `;

  return transporter.sendMail({
    from: `"MS Notification" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Reset your password',
    html,
  });
}