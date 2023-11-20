import React from "react";
import Navbar from "../Components/Navbar";
import Folio from "../Components/Folio";
import Progres from "../Components/Progres";
import ContactForm from "../Components/ContactForm";
import Projects from "../Components/Projects";


const Home = () =>{
    return(
    <div>
        <Navbar/>
        <Folio />
        <Progres />
        <Projects/>
        <ContactForm />
    </div>

    )
};
export default Home;