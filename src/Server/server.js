// Exemple de serveur backend (server.js)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('Home');});

app.post('/Home', (req, res) => {
  const { to, subject, text } = req.body;
  

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carmendaya17@gmail.com',
      pass: 'carmen123',
    },
  });

  const mailOptions = {
    from: 'carmendaya17@gmail.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.');
    } else {
      console.log('E-mail envoyé : ' + info.response);
      res.status(200).send('E-mail envoyé avec succès.');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
