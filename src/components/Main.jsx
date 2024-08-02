import { Images } from "../constants/Images";

const Main = () => {

    return (
        <div className="header">
            <div className="left">
                <img
                    src={Images.catlamp}
                    alt="cat under s atreet lamp"
                />
            </div>
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
                        <h2>A Machine Learning Enthusiast 
                            & React Native Developer</h2>
                        <a href="https://www.linkedin.com/in/siddharth-verma-53981a256">
                            <button>Let's Connect</button>
                        </a>
                    </div>
                </div>
                <div className="header-title">
                    <p id="subtitle">
                    Available for freelancing and project collaborations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;