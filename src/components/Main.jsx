import { Images } from "../constants/Images";

const Main = () => {

    return (
        <div className="header">
            <div className="right">
                <div className="header-title">
                    <h1>
                    Hi, I am Siddharth Verma
                    </h1>
                </div>
                <div className="main">
                    <div className="img-container">
                        <img
                            src={Images.web}
                            alt="web app"
                        />
                    </div>
                    <div className="content">
                        <div className="glow glow-1"></div>
                        <div className="glow glow-2"></div>
                        <div className="glow glow-3"></div>
                        <h2>A Machine Learning Enthusiast 
                            & React Native Developer</h2>
                        <a href="https://www.linkedin.com/in/siddharth-verma-53981a256" id="main-button">
                            <button>Let's Connect</button>
                        </a>
                    </div>
                </div>
                <div className="header-title">
                    <h3>Portfolio</h3>
                    <p id="subtitle" className="main-subtitle">
                        My public Portfolio includes projects on different domains, including Apps made using React Native, Machine Learning projects and model integrations in various applications. To see more of my works, visit my <a href>Github page</a>, check out my <a href>resumé</a>, or <a href>about</a> section in my portfolio
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;