import React from 'react';

const Techblock = (props) => {

    return (
        <div onClick={props.onClick} className="technologiesblock">
            <h4>{props.title}</h4> 
            <p>{props.children}</p>
        </div>
    );
};

export default Techblock;