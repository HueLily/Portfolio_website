import React from "react";
import "./index.css"

const ExperienceItem = ({year, title, location, desc1}) => {
    return (
        <div className="work-item">
            <div className="work-icon"><a href="https://icons8.com/icon/OUdqvn4VDDbc/suitcase"></a></div>
            <span className="work-date">{year}</span>
            <h3 className="work-title"><b>{title} {location}</b></h3>
            <p className="work-desc">{desc1}</p>
        </div>
    )
}

export default ExperienceItem;
