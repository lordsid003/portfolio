import "../styles/Project.css";
import ProjectCard from "../Templates/ProjectCard";
import { useEffect, useState } from "react";
import sanityConfig, { Urlfor } from "../sanity";

const Projects = () => {
    const [data, setData] = useState([]);

    const query = `
        * [_type == "project"] | order(_createdAt asc) {
            ...,
            name[] -> {
            
            }
        }
    `;

    useEffect(() => {
        sanityConfig.fetch(query)
        .then(data => {
            setData(data);
            for(let i = 0; i < data.length; i++) {
                console.log(data[i].image[0]);
            }
        });
    }, []);

    return (
        <div className="project section" id="projects">
            <div className="project-content">
                <div>
                    <h2 id="header">
                        Featured Projects
                    </h2>
                    <p id="subtitle" className="project-subtitle">
                        Hover over the project card to explore project details. These projects are made in Hackathons or for personal learning. The project details include source code, deployment links, features and technical schema.
                    </p>
                </div>
                
                <div className="gallery">
                    {
                        data.map((item, index) => {
                            return (
                                <ProjectCard 
                                    key={item._id}
                                    id={item._id}
                                    imgUrl={ Urlfor(item.image[0]).url() }
                                    title={item.project}
                                    desc={item.desc}
                                    type={item.gridtype}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;