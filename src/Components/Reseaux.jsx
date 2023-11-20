import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const  Reseaux = () => {
    return (
        <>
            <div className='reseauxx' style={{margin: '10px'}}>
            <hr className="border border-#3b344e border-3 "></hr>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            
            

            <div className="fixed bottom-4 right-2">
                <a href="#top">
                    <img src={"fleche.jpg"} style={{width: '20px' }} alt="haut" className="w-8 cursor-pointer"/>
                </a>
            </div>


            <div>
                <footer style={{ width: '32rem', backgroundColor: "#3b344e", color: "white", height: "50px", padding: "20px", marginBottom: "5px", marginTop: "20px", borderRadius: "10px" }} >
                    <div className="container">
                        <p className="text-center" >
                            &copy; {new Date().getFullYear()} Uzuri-new. Tous droits réservés.
                            <a href="https://uzuri-new.com/" style={{ textDecoration: "none", color: 'greenyellow' }}>By Dayana</a>.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Reseaux;
