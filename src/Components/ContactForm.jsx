import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [showConfirmation, setShowConfirmation] = useState(false);
const [confirmationMessage, setConfirmationMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');



const handleSubmit = (e) => {
e.preventDefault();
        // Vous pouvez ajouter ici la logique pour envoyer le formulaire
if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
setErrorMessage('Veuillez remplir tous les champs.');
            return;
        }
        // Réinitialisation des champs après la soumission
    setName('');
    setEmail('');
    setMessage('');
    setShowConfirmation(true);

        // Cacher le message de confirmation après quelques secondes
    setTimeout(() => {
        setShowConfirmation(false);
        }, 5000);
    };

    return (
        <>
        <div className='mymargin'>
        <hr className="border border-#3b344e border-3 "></hr>
        {showConfirmation && (
        <Alert variant="success" onClose={() => setShowConfirmation(false)} dismissible>
                       
        Message envoyé avec succès !<br/>
        Nous vous recontaterons dès que possible.
        </Alert>
                )}
        <h2>Laisser un message</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
            <Form.Label></Form.Label>
            <Form.Control
            type="text"
            placeholder="Entrez votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
                        />
            </Form.Group>

            <Form.Group controlId="formEmail">
            <Form.Label></Form.Label>
            <Form.Control
             type="email"
            placeholder="Entrez votre email"
            value={email}
             onChange={(e) => setEmail(e.target.value)}
                        />
            </Form.Group>

            <Form.Group controlId="formMessage">
            <Form.Label></Form.Label>
                <Form.Control
                as="textarea"
                rows={4}
                placeholder="Entrez votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                        />
                </Form.Group>

            <Button className='mybutton' variant="primary" type="submit">
            Envoyer
            </Button>
        </Form>
    </div>
            
</>
    );
}

export default ContactForm;
