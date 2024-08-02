import { Images } from "../constants/Images";
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
            <div className="project-img">
                <img
                    src={Images.catwindow}
                    alt="cat sitting by a street lamp"
                />
            </div>
            <div className="project-content">
                <h2 id="header">
                    Featured Projects
                </h2>
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
                <div>
                    <p id="subtitle">
                        ** Personal and Hackathon projects
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;