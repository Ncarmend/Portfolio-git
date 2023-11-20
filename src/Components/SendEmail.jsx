import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const SendEmail = () => {
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
        <>
            <div className='mymargin'>
                <h2>Send Email1</h2>
                <Form onSubmit={handleFormSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    type="email" name="to" value={emailData.to} onChange={handleInputChange}
                                    placeholder="Entrez votre email"
                                    
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    type="text" name="subject" value={emailData.subject} onChange={handleInputChange}
                                    placeholder="Entrez votre email"
                                    
                                    
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    as="textarea" name='text' value={emailData.text} onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Entrez votre message"
                                    
                                />
                            </Form.Group>

                            <Button className='mybutton' variant="primary" type="submit">
                                Send Email
                            </Button>
                        </Form>
                    </div>

                <div>
                    <h1>Send Email</h1>
                    <form onSubmit={handleFormSubmit}>
                        <button type="submit">Send Email</button>
                    </form>
                </div>
        </>

    );
}  
export default SendEmail; 