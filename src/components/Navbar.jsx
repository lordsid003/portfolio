import { useEffect, useState } from "react";
import { Images } from "../constants/Images";
import "../styles/Navbar.css";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("profile");

    const tabHandler = (item) => {
        setActiveItem(item);
    };

    const items = [
        "profile", "projects", "about", "socials",
    ];

    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-item');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    setActiveItem(id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            if (observer && sections) {
                sections.forEach(section => observer.unobserve(section));
            }
        };
    }, []);

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <img
                        src={Images.logo}
                        alt="logo"
                    />
                </div>
                <div className="items">
                    {
                        items.map((item, index) => {
                            return (
                                <a 
                                    href={`#${item}`} 
                                    className={item === activeItem ? "nav-item active" : "nav-item"} 
                                    key={index.toString()}
                                    onClick={() => tabHandler(item)}
                                >
                                    {item}
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;