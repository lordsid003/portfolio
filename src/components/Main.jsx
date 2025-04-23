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
                        <a href="https://linkedin.com/in/vermasiddh" id="main-button">
                            <button>Let's Connect</button>
                        </a>
                    </div>
                </div>
                <div className="header-title">
                    <h3>Profile Portfolio</h3>
                    <p id="subtitle" className="main-subtitle">
                        My public Portfolio includes projects on different domains, including Apps made using React Native and Expo, Machine Learning projects and model integrations in various applications. 
                        To see more of my works, visit my <a href="https://github.com/lordsid003" target="_blank" style={{ textDecoration: "none" }}>Github profile</a>. Ps: Trying my hands at Competitive Programming, checkout my <a href="https://codeforces.com/profile/siddhverma03" target="_blank" style={{ textDecoration: "none" }}>Codeforces profile</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;