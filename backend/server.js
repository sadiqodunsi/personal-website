require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    const messagePlainText = `Name: ${name}\r\nEmail: ${email}\r\nPhone: ${phone}\r\nMessage: ${message}`;

    const messageHtml = `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Message:</b> ${message}</p>
    `;

    // Create mail transport to sned emails
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.AUTH_EMAIL_ADDRESS,
          pass: process.env.AUTH_EMAIL_PASS,
        },
        tls: {
            // Do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        // The email must be sent from our email or else it will fail
        from: `${name} <${process.env.AUTH_EMAIL_ADDRESS}>`,
        to: process.env.TO_EMAIL_ADDRESS,
        replyTo: email,
        subject: process.env.EMAIL_SUBJCECT,
        text: messagePlainText,
        html: messageHtml
    }

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (err) => {
        if(err){
            //console.log('An error occured.');
            res.status(500).json('An error occured.');
        } else {
            //console.log('Message sent successfully.');
            res.json('Message sent successfully.');
        }
    });
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});