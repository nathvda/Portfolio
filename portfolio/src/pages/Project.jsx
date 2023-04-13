import React from 'react';
import ProjectBlock from './components/ProjectBlock';

const Project = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projectwrapper">
            <ProjectBlock title="Two by Two" role="Frontend" crew="Personal project." year="2022" image="/images/memory_game.webp" url="https://navanden.tech/"/>
            <ProjectBlock title="Cogip" role="Frontend" crew="Group project" year="2023" image="/images/cogip__preview.webp" url="https://cogip.navanden.tech/"/> 
            </div>
        </div>
    );
};

export default Project;