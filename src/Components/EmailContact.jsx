import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Alert } from 'react-bootstrap';
//import { useForm } from 'react-hook-form';

const EmailContact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_8j4hnowkg4a2', 
        'template_3yt4yt8',
        form.current, 
        'Ks3LMabnVabqmXMzq'
     )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    };
  return (
    <>
    <div className='mymargin'>
    <hr className="border border-#3b344e border-3 "></hr>
    <div>
      <h1>Email Contact</h1>
    </div>
     <Form ref={form} onSubmit={sendEmail}>
      <Form.Group controlId="forName">
        <Form.Label></Form.Label>
        <Form.Control type="text" name="user_name" placeholder='Your Name' />
      </Form.Group> 
      <Form.Group controlId='forEmail'>
        <Form.Label></Form.Label>
        <Form.Control type="email" name="user_email" placeholder='Your Email' />
      </Form.Group>
      <Form.Group controlId='forMessage'>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Your Message' name="message" />
      </Form.Group>
      <Button type="submit" value="Send">
          SUBMIT
       </Button>
   </Form>
   </div>
   <div className='mymargin'>
   <Form   ref={form} onSubmit={sendEmail}>
                    <Form.Group controlId="formName">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text" name="user_name"
                            placeholder="Entrez votre nom"
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="email" name="user_email"
                            placeholder="Entrez votre email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label></Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Entrez votre message"
                            
                        />
                    </Form.Group>

                    <Button type="submit" value="Send">
                        SUBMIT
                    </Button>
                </Form>
   </div>
   </>
  );
}
export default EmailContact;