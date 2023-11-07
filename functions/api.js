
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import path from 'path';
import cors from 'cors';
import serverless from 'serverless-http';




const app = express();
const router = express.Router();
app.use(cors());


app.use(express.json());

// Configure the email transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: 'shosanacodemia@gmail.com',
      pass: 'mgkr dhey vfry zdrc',
    },
    tls: {
      rejectUnauthorized: false, // Bypass SSL certificate validation
    },
  });

// Configure file storage using multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage });

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle POST request to send email with attachment
router.post('/send-email', upload.single('attachment'), (req, res) => {
    const { to, subject, html } = req.body;

    const mailOptions = {
      from: 'Shosan Code Hub',
      to,
      subject,
      html,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Email sending failed' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ success: true, message: 'Email sent successfully' });
      }
    });
  });


app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);










