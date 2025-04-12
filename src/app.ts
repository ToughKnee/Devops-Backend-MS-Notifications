import express from 'express';
import dotenv from 'dotenv';
import { sendEmailController } from './features/notifications/email/controllers/email.controller';

dotenv.config();
const app = express();
app.use(express.json());

app.post('/send-password-reset', sendEmailController);

app.listen(3001, () => {
  console.log('MS-Notification running on http://localhost:3001');
});