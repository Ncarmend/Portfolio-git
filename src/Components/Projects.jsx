import { useEffect, useState } from "react";
import axios from "axios";
import TodoList  from "./TodoList";
import '../App.css';

const Projects = () =>{
    const [repos, setRepos] = useState([]);
    useEffect(() => {
    const fetchRepos = async () => {
        try {
          const response = await axios.get(
            'https://api.github.com/users/Ncarmend/repos',
            {
              headers: {
                Authorization: `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 `,
              },
            }
          );
          setRepos(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des référentiels', error);
          }
        };
    
        fetchRepos();
      }, []);

    return (
        <>
        <div className="projects" style={{ width: '32rem', alignContent: 'right', padding: '6px', backgroundColor: "#3b344e", color:"whitesmoke", textDecoration: "whitesmoke" }}>
          <h2>Mes Référentiels GitHub</h2>
          <ul className="row row-cols-2">
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
          <hr className="border border-#3b344e border-3 " />
          <div className="">
            <TodoList/>
          </div>
         
        </div>

      </>
    );
    
    
;}
export default Projects;

