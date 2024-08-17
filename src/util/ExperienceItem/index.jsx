import React from "react";
import suitcase from "../../assets/suitcase.png";
import "./index.css"

const ExperienceItem = ({year, title, location, desc1}) => {
    return (
        <div className="work-item">
            <div className="work-icon"><img src={suitcase} alt="" /></div>
            <span className="work-date">{year}</span>
            <h3 className="work-title"><b>{title} {location}</b></h3>
            <p className="work-desc">{desc1}</p>
        </div>
    )
}

export default ExperienceItem;
