import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <section className="errorblock"><h2>Oops. Someone got lost.</h2>
            <img className="errorWheel" src="./src/assets/images/Wheel.webp" alt="404 error"/> 
            <Link className="backHome" to={'/'}>Back to home menu</Link>
            <img className="pics" src="./src/assets/images/temple.webp"/>
            <img className="pics" src="./src/assets/images/dice.webp"/>
            </section>
            </>
    );
};

export default Error404;