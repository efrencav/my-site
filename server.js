const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');


const app = express();
const port = 4444;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(port, () => {
    console.log('We are live on port 4444');
});

// app.engine('handlebars', exphbs());
// app.set('view engine', "handlebars");

app.get('/', (req, res) => {
    res.send('Welcome to my api');
})

app.use('public', express.static(path.join(__dirname, 'public')));

app.post('/api/v1', (req, res) => {
    var data = req.body;
    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: '#',
            pass: '#'
        },
        tls: {
            rejetUnauthorized: false
        }
    });
    app.post('/send', (req, res) => {
        console.log(data.name);
    })

    var mailOptions = {
        from: data.email,
        to: '#',
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

    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                res.send(error)
            } else {
                res.send('Success')
            }
            smtpTransport.close();
        });
})