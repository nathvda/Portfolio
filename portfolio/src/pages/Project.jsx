import React from 'react';
import ProjectBlock from './components/ProjectBlock';

const Project = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projectwrapper">
            <ProjectBlock title="Project Name" role="Backend developer" crew="To be added." year="2023" image="/images/boat.png"/> 
            </div>
        </div>
    );
};

export default Project;