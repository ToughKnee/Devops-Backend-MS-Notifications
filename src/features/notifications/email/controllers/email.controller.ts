import { Request, Response } from 'express';
import { sendPasswordResetEmail } from '../services/email.service';

export const sendEmailController = async (req: Request, res: Response): Promise<void> => {
  const { email, name, recoveryLink } = req.body;

  if (!email || !recoveryLink) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  try {
    await sendPasswordResetEmail(email, name, recoveryLink);
    res.status(200).json({ message: '📩 Email sent successfully!' });
  } catch (err) {
    console.error('❌ Email send failed:', err);
    res.status(500).json({ message: 'Failed to send email' });
  }
};
