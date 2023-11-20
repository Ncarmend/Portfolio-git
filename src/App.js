import Home from "./Components/Home"
import Progres from "./Components/Progres"
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm"
import Reseaux from "./Components/Reseaux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home/>}>
            
            <Route path="competences" element={<Progres/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="form" element={<ContactForm/>}/>
            
          </Route>
        </Routes>
        
        <Reseaux/>
        
      </BrowserRouter>

      </div>
      
    </>

  );
}

export default App;
