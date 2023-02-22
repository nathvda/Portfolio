import React from 'react';
import { Link } from 'react-router-dom';

const Me = () => {
    return (
        <>
        <main className="main__Me">
        <p>Welcome on board, Sailor!</p>
        <b>I am</b>
        <h1><span>Nathalie</span> <span>Vanden Abeele</span></h1>
        <p>I am a Junior Full Stack Developer.</p>
        <p>This is my portfolio</p>
        <Link to={'./journey'} className="link--accent" href="./pages/journey.html">discover my journey</Link>
        <div className="main__image bubble_two" id="hero_bubble">
        <img id="hero_img" src="../src/assets/images/boat.webp" alt="a picture of me"/></div>
        <div className="bubble_one"></div>
        </main>
        </>
    );
};

export default Me;