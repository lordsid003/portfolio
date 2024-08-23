import { useEffect, useState } from "react";
import { Images } from "../constants/Images";
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

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <img
                        src={Images.logo}
                        alt="logo"
                    />
                </div>
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
                                    {item}
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
    );
};

export default Navbar;