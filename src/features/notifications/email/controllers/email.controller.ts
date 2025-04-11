import { Request, Response } from 'express';
import { sendPasswordResetEmail } from '../services/email.service';
import { SendPasswordResetEmailDto } from '../dto/SendPasswordResetEmailDto';

export const sendEmailController = async (req: Request, res: Response): Promise<void> => {
  const dto = req.body as SendPasswordResetEmailDto;

  if (!dto.email || !dto.recoveryLink) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  try {
    await sendPasswordResetEmail(dto);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email send failed:', err);
    res.status(500).json({ message: 'Failed to send email' });
  }
};
