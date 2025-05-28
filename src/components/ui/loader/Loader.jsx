import Lottie from "lottie-react";
import loader from "../../../assets/animation/loader.json";
import "./loader.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-animation">
                <Lottie animationData={loader} loop={true} autoplay={true} />
            </div>
        </div>
    );
};

export default Loader;
