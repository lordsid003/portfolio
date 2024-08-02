import { Images } from "../constants/Images";
import "../styles/Loader.css";

const Loader = () => {
    return (
        <div className="loader">
            <div>
                <img
                    src={Images.logo}
                    className="logo"
                />
            </div>
            <div className="banter-loader">
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
                <div className="banter-loader__box"></div>
            </div>
        </div>
    );
};

export default Loader;