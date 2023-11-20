
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
//import { Outlet } from 'react-router-dom';


const Progres = () => {
    return (
        <>
        <div className='competance'>
        <hr className="border border-#3b344e border-3 "></hr>
            <h2>Compétences</h2>
            <div className='progression' >
                <label>HTML</label>
                <ProgressBar striped variant="success" now={90} />
                <div className='progression'>
                    <label>CSS</label>
                    <ProgressBar striped variant="success" now={90} />
                </div>
                <div className='progression'>
                    <label>BOOTSTRAP</label>
                    <ProgressBar striped variant="success" now={80} />
                </div>
                <div className='progression'>
                    <label>JAVASCRIPT</label>
                    <ProgressBar striped variant="success" now={70} />
                </div>
                <div className='progression'>
                    <label>REACT</label>
                    <ProgressBar striped variant="success" now={70} />
                </div>
                <div className='progression'>
                    <label>MONGODB</label>
                    <ProgressBar striped variant="success" now={70} />
                </div>
                <div className='progression'>
                    <label>POSTGRESQL</label>
                    <ProgressBar striped variant="success" now={60} />
                </div>
                <div className='progression'>
                    <label>MySql</label>
                    <ProgressBar striped variant="success" now={60} />
                </div>
                <div className='progression'>
                    <label>PHP</label>
                    <ProgressBar striped variant="success" now={60} />
                </div>
                <div className='progression'>
                    <label>WORPRESS</label>
                    <ProgressBar striped variant="success" now={80} />
                </div>
            </div>
            <hr className="border border-#3b344e border-3 "></hr>
        </div>
       
        </>
    );
}

export default Progres;
