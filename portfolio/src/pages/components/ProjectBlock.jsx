import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBlock = (props) => {
    return (
        <>
        
            <section className="projectblock">
            <h4>{props.title}</h4>
            <div className="bubble_three"><img src={props.image}/></div>
            <div className="infos">
            <span className="Label">Role:</span><span className="info">{props.role}</span>
            <span className="Label">Crew:</span><span className="info">{props.crew}</span>
            <span className="Label">Year:</span><span className="info">{props.year}</span>      
            </div></section> 
        </>
    );
};

export default ProjectBlock;