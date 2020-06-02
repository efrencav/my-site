require('dotenv').config();
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Express server is listening on port: ${port}`)
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.SENDER_EMAIL_ADDRESS,
           pass: process.env.SENDER_EMAIL_PASSWORD
       }
   });

app.post('/api/v1', (req, res) => {
    const data = req.body;

    const mailOptions = {
        from: process.env.SENDER_EMAIL_ADDRESS,
        to: process.env.RECEIVER_EMAIL_ADDRESS,
        subject: 'Online Portfolio Contact Request',
        html: `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
        <li>${data.name}</li>
          <li>${data.email}</li>
          <li>${data.subject}</li>
          </ul>
          <h3>Message</h3>
          <p>${data.message}</p>
          `
    };

    transporter.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                res.status(400).json({
                    success: false,
                    data: error
                })
            } else {
                res.status(200).json({
                    success: true,
                    data: response
                })
            }
            smtpTransport.close();
        });

})
