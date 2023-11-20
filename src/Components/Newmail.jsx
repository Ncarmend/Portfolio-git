// Exemple de composant React pour le formulaire (EmailForm.js)
import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/send-email', emailData);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Destinataire:
        <input type="email" name="to" value={emailData.to} onChange={handleInputChange} />
      </label>
      <label>
        Sujet:
        <input type="text" name="subject" value={emailData.subject} onChange={handleInputChange} />
      </label>
      <label>
        Corps:
        <textarea name="text" value={emailData.text} onChange={handleInputChange} />
      </label>
      <button type="submit">Envoyer E-mail</button>
    </form>
  );
};

export default EmailForm;
