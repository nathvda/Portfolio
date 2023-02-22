import React from 'react';

const JourneyBlock = (props) => {
    return (
        <section className="journeyblock">
            <h5>{props.date}</h5>
            <h3>{props.title}</h3>
            <p>{props.children}</p>
        </section>
    );
};

export default JourneyBlock;