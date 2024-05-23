import React from "react";
import "../../styles/index.css"; // Corrected import statement

// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Create your first component
const Home = ({ counter }) => {
    return (
        <div className="BigDisplay">
            <div className="row">
                <div className="col">
                    <div className="clock">
                        <i className="fa-regular fa-clock"></i>
                    </div>
                </div>
                <div className="col">
                    <div className="four">{Math.floor((counter / 1000) % 10)}</div>
                </div>
                <div className="col">
                    <div className="three">{Math.floor((counter / 100) % 10)}</div>
                </div>
                <div className="col">
                    <div className="two">{Math.floor((counter / 10) % 10)}</div>
                </div>
                <div className="col">
                    <div className="one">{Math.floor((counter / 1) % 10)}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
