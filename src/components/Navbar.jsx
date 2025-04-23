import { useEffect, useState } from "react";
import { Images } from "../constants/Images";
import { FaInfo } from "react-icons/fa6";
import { IoBuild } from "react-icons/io5";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";
import "../styles/Navbar.css";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("profile");
    const [showNavBar, setShowNavBar] = useState(false);

    const tabHandler = (item) => {
        setActiveItem(item);
    };

    const items = [
        "profile", "projects", "about", "socials",
    ];

    const handleClick = () => {
        var NavBar = document.querySelector("#nav-items");
        NavBar.classList.toggle("show");
        if (NavBar.style.display === "flex") {
            NavBar.style.display = "none";
            setShowNavBar(false);
        } else {
            NavBar.style.display = "flex";
            setShowNavBar(true);
        }
    };

    const iconSelector = (tab) => {
        if (tab === "profile") {
            return <PiFinnTheHumanFill/>
        }
        if (tab === "projects") {
            return <IoBuild />
        }
        if (tab === "about") {
            return <FaInfo/>
        }
        if (tab === "socials") {
            return <IoShareSocialSharp />
        }
    }

    return (
        <>
            <div className="logo">
                <img
                    src={Images.logo}
                    alt="logo"
                />
            </div>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="items" id="nav-items">
                        {
                            items.map((item, index) => {
                                return (
                                    <a 
                                        href={`#${item}`} 
                                        className={item === activeItem ? "nav-item active" : "nav-item"} 
                                        key={index.toString()}
                                        onClick={() => tabHandler(item)}
                                    >
                                        <button>
                                            <div className="icon">
                                                {iconSelector(item)}
                                            </div>
                                        </button>
                                        {String(item).toUpperCase()}
                                    </a>
                                );
                            })
                        }
                    </div>
                    <button className="menu-btn" onClick={handleClick}>
                        <span className="material-symbols-outlined menu">
                                {
                                    !showNavBar ? "menu" : "close"
                                }
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;