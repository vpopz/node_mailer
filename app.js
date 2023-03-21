const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();


  // STEP 1:transporter
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
 });

 //STEP 2: Mail Data
 const mailOptions = {
  from: process.env.EMAIL, // Sender address
  to: 'vaisakhrokz2@gmail.com', // List of recipients
  subject: 'Node Mailer', // Subject line
  text: 'Hello, this mail is only for testing purpose', // Plain text body
};

//STEP 3 : sending

transport.sendMail(mailOptions, function(err, info) {
 if (err) {
   console.log(err)
 } else {
   console.log(info);
 }
});

