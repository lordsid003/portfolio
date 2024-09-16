import { Images } from "../constants/Images";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about section" id="about">
            <div className="about-img-wrapper">
                <img
                    src={Images.portfolioImage}
                    alt="About section"
                />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1.5rem" }}>
                    <div>
                        <h3 id="header">About Me</h3>
                        <p style={{ padding: "1rem" }}>
                            I'm a pre-final year student at Maharaja Surajmal Institute Of Technology, New Delhi pursuing Bachelors in Technology in Computer Science & Engineering. My major domains of interest include App Development & Machine Learning.
                        </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
                        <a href="https://drive.google.com/file/d/1-fKkZV4AF5YVQnYVgUXDqeZSzLZoGSGS/view?usp=sharing" target="blank" id="main-button">
                            <button>Download CV</button>
                        </a>
                        <a href="https://github.com/lordsid003" target="blank" id="main-button">
                            <button>Github Profile</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="about-content">
                <div>
                    <h3 className="about-title">
                        {"<"} Positions of Responsibility {"/>"}
                    </h3>
                    <ul itemType="">
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            IEEE Software Lead, MSIT
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            Leading project development and strategic planning, managing a technical team of 15+ fellow students;
                            using agile methodologies to boost team productivity and develop projects in time
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            Head Of Technical Department, Geek Room
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="about-title">
                        {"<"} Experience {"/>"}
                    </h3>
                    <ul>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span> 
                            Participated in over 10 Hackathons and bagged first prize in 4 of them
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            Mentored over 100 students in Hackathons organized by Geek Room and IEEE. Provided technical and ogranizing assistance contributing to success of these events
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            Contributed in establishing a coding community in our college for promoting Coding Culture and
                            collaborative networking
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="about-title">
                        {"<"} Achievements {"/>"}
                    </h3>
                    <ul>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            Formulated a comprehensive strategy during the CyberSecurity Hackathon organized by Delhi Police in West District, Delhi under CyberSecurity Awareness Program integrating machine learning techniques withMobSF framework aimed to reduce mobile malware risks by 20%
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            Winner at Tech-a-Thon 3.0 organized by GDSC SRCAW, DU
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                            Winner at HackAvensis organized by IEEE, MSIT
                        </li>
                        <li>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                        Contributed to open-source projects during HacktoberFest 2023, successfully merging 4 impactful pull
                        requests across 3 repositories
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    );
};

export default About;
