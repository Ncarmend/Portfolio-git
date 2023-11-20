import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
//import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
const Folio = () => {
    return (
        <>
            <Card className='cartprof' style={{ width: '32rem', alignContent: 'center', padding: '100px', backgroundColor: "#3b344e" }}>
                <Card.Img className='photo' style={{ width:'170px' }} variant="top" src="zoom4.png" />
                <Card.Body>
                    <Card.Title> <h5 className='metitres'>JUNIOR WEB DEVELOPER</h5></Card.Title>
                    <Card.Text>
                        <h3 className='metitres'>CARMEN NDAYA  </h3>
                    </Card.Text>

                    <div className="cartimage" >

                        <Link to ="https://uzuri-new.com" > <Card.Img src="logouzuri.png" style={{ width: '4rem', margin: '8' }} roundedCircle /></Link>
                        <Link to ="https://github.com/Ncarmend" > <Card.Img src="githbb.webp" style={{ width: '4rem', margin: '2' }} roundedCircle /></Link>
                        <Link to ="https://www.linkedin.com/in/carmen-ndaya/" > <Card.Img src="lonkkk.png" style={{ width: '4rem' }} roundedCircle /></Link>

                    </div>

                    <Link to='mailto:carmenndaya@gmail.com' ><Button className='mybutton' variant="primary">Contact me</Button></Link>
                </Card.Body>
            </Card>
            
        </>

    );
}

export default Folio;