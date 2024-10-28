const express = require("express");
const nodemailer = require("nodemailer");
const cors = require('cors')
require("dotenv").config();

const { template } = require('./email.js')

const app = express();
app.use(express.json());
app.use(cors())

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// POST route for form submissions
app.post("/api/course", async (req, res) => {
    const { name, email, program, subject, message } = req.body;

    if(!name || !email || !program || !subject || !message){
        return res.status(400).json( {message: "One or more fields are empty!"} )
    }

    // Define the email content
    const mailOptions = {
        from: `"Course Inquiry" <${process.env.EMAIL_USER}>`,
        to: "vivimarny@gmail.com",
        subject: `New Course Inquiry: ${subject}`,
        html: template( { name, email, program, subject, message } ),
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "MESSAGE SENT SUCCESSFULLY" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "THERE WAS AN ERROR SENDING MESSAGE" });
    }
});

//subscribe submission
app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email field is empty!" });
    }

    const mailOptions = {
        from: `"Newsletter Subscription" <${process.env.EMAIL_USER}>`,
        to: "vivimarny@gmail.com", 
        subject: `New Newsletter Subscription`,
        text: `New subscriber: ${email}`,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "SUBSCRIPTION SUCCESSFUL" });
    } catch (error) {
        console.error("Error sending subscription email:", error);
        res.status(500).json({ message: "THERE WAS AN ERROR SUBSCRIBING" });
    }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
