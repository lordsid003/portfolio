import { useEffect, useState } from "react";
import { Images } from "../constants/Images";
import "../styles/Navbar.css";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("profile");
    const [showNavbar, setShowNavbar] = useState(false);

    const tabHandler = (item) => {
        setActiveItem(item);
    };

    const items = [
        "profile", "projects", "about", "socials",
    ];

    const navbarDisplay = document.querySelector("#nav-items");

    const handleClick = () => {
        setShowNavbar(!showNavbar);
        if(showNavbar) {
            navbarDisplay.style.display = "block";
        }
        else {
            navbarDisplay.style.display = "none";
        }
        console.log(showNavbar);
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
                <button className="menu-btn">
                    <span className="material-symbols-outlined menu">
                            menu
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;