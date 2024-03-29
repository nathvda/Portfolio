import React from 'react';

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
            <a className="liveversion" href={props.url} target="_blank">See live version</a>      
            </div></section> 
        </>
    );
};

export default ProjectBlock;