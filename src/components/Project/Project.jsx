import React from 'react';
import "./Project.css"


const Project = ({image, name}) => {
    const string = "bird.png";
    let cardImage = require("../../images/"+image);

    return (
        <div className="card card-custom align-items-center">
            <img className="card-img-top" src={cardImage.default} />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
            </div>
        </div>
    );
};

export default Project;