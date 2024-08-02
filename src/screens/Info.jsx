import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import sanityConfig, { Urlfor } from "../sanity";
import ProjectInfo from "../components/ProjectInfo";
import Loader from "../Templates/Loader";
import { PortableText } from '@portabletext/react';
import "../styles/Info.css";

const Info = () => {
    const params = useParams();
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayImage, setDisplyImage] = useState(null);
    const [displayType, setDisplayType] = useState(null);

    const query = `
        * [_type == "project" && _id == \"${params.projectId}\"] {
            ...,
            category[] -> { 
                _id,
                title,
                slug,
                description
            },
            name[] -> {
                _id,
                desc,
                project,
                description,
                image
            },
        }
    `;

    useEffect(() => {
        sanityConfig.fetch(query)
        .then(data => {
            setInfo(data[0]);
            setTimeout(() => {
                setLoading(false)
            }, 1500);
        })
        .catch((error) => {
            console.error('Error fetching project data:', error);
            setLoading(false);
        });
    }, [params.projectId]);
    
    useEffect(() => {
        const cursorRounded = document.querySelector('.customCursor');

        const moveCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        
        if (cursorRounded) {
            cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
        }

        window.addEventListener('mousemove', moveCursor);

        return () => {
        window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
       <>
       <div className="customCursor"></div>
        <div className="info__container">
            {
                loading ?
                <Loader />
                :
                <>
                    <ProjectInfo 
                        title={info.project}
                        tags={info.category}
                    />
                    <div className="info__brief">{info.desc}</div>
                    <div className="info__content">
                        <div className="info__content-item">
                            <div className="info__title">
                                <h3>About</h3>
                                <span className="material-symbols-outlined">
                                    lightbulb
                                </span>
                            </div>
                            <div className="info__about">
                                <PortableText
                                    value={info.description}
                                    components={{
                                    block: {
                                        h1: ({ children }) => <h1 
                                                className="sanity__h1"
                                            >
                                                {children}
                                            </h1>,
                                        h2: ({ children }) => <h2 
                                                className="sanity__h2"
                                            >
                                                {children}
                                            </h2>,
                                        normal: ({ children }) => <p 
                                                className="sanity__p"
                                            >
                                            {children}</p>,
                                        blockquote: ({ children }) => <blockquote 
                                            className="sanity__blockquote"
                                            >
                                                {children}
                                            </blockquote>,
                                    },
                                    list: {
                                        bullet: ({ children }) => <ul className="sanity__ul sanity__list">{children}</ul>,
                                        number: ({ children }) => <ol className="sanity__ol sanity__list">{children}</ol>,
                                    },
                                    marks: {
                                        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                        em: ({ children }) => <em className="italic">{children}</em>,
                                        underline: ({ children }) => <u className="underline">{children}</u>,
                                        code: ({children}) => <span 
                                                className="sanity__codeblock"
                                            >{
                                                children}
                                            </span>,
                                        link: ({ value, children }) => {
                                            const { href } = value;
                                            return <a href={href} className="text-blue-500 hover:underline">{children}</a>;
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <div className={`info__img ${info.gridtype}`}>
                            <img
                                src={Urlfor(info.image[0]).url()}
                            />
                        </div>
                    </div>
                    <div className="info__gallery">
                        {
                            info.image.map((item, index) => {
                                return (
                                    <img
                                        key={(index.toString())}
                                        className={`${info.project.split(".")[0].split(" ")[0].toLowerCase()}-${index}`}
                                        src={Urlfor(item).url()}
                                        onClick={() => {
                                            setDisplyImage(Urlfor(item).url())}
                                        }
                                    />
                                )
                            })
                        }
                    </div>
                    {
                        displayImage && 
                        <div className="info__focus" onClick={() => setDisplyImage(null)}>
                            <span class="material-symbols-outlined">
                                close
                            </span>
                            <img
                                src={displayImage}
                                className="info__focus-img"
                            />
                        </div>
                    }
                </>
            }

        </div>

       </>
    )
};

export default Info;