import { Images } from "../constants/Images";
import "../styles/About.css";

const Footer = () => {
    return (
        <div className="footer" id="socials">
            <div className="footer-header">
                <p>
                    Made with React. Some projects may not be deployed. The site is actively being maintained.
                </p>
                <img
                    src={Images.logo}
                />
            </div>
            <div className="footer-links">
                <p>Socials</p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/siddharth-verma-53981a256">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lordsid003">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="mailto:siddhverma03@gmail.com">
                            Mail
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-end">
                ⓒ Siddharth Verma. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;