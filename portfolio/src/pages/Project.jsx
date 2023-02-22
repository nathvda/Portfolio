import React from 'react';
import ProjectBlock from './components/ProjectBlock';

const Project = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projectwrapper">
            <ProjectBlock title="COGIP" role="Backend developer" crew="To be added." year="2023" image="./src/assets/images/boat.webp"/> 
            </div>
        </div>
    );
};

export default Project;