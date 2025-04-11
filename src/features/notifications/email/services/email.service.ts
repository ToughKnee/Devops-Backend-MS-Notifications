// src/features/notifications/email/services/email.service.ts
import { transporter } from '../../../../config/email.config';
import { SendPasswordResetEmailDto } from '../dto/SendPasswordResetEmailDto';
import { passwordResetTemplate } from '../../../../utils/passwordResetTemplate';

export async function sendPasswordResetEmail({ email, recoveryLink }: SendPasswordResetEmailDto): Promise<void> {
  const html = passwordResetTemplate(recoveryLink);
  await transporter.sendMail({
    from: `"MS Notification" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Reset your password',
    html,
  });
}
