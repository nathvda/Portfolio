import React, {useState, useEffect} from 'react';
import Techblock from './components/Techblock';

const Technologies = () => {

    const [count, setCount] = useState(0);

    const incr = () => {
        setCount(count + 1);
        console.log('clicked');
    } 

    return (
        <>
        <h2>Technologies</h2>
        <section className="technologies"> 
        <div className="techs">
            <Techblock onClick={(e) => incr()} title="HTML" level="">Vanilla</Techblock>
            <Techblock onClick={(e) => incr()} title="CSS" level="">Vanilla, Sass</Techblock>
            <Techblock onClick={(e) => incr()} title="JAVASCRIPT" level="">Vanilla, React</Techblock>
            <Techblock onClick={(e) => incr()} title="PHP" level="">Vanilla, Laravel</Techblock>
            <Techblock onClick={(e) => incr()} title="Bundlers" level="">Vite</Techblock>
            <Techblock onClick={(e) => incr()} title="Databases" level="">MySQL, MongoDB</Techblock>
        </div>
        <div className="score">
            <b>Score : </b>
            {count}</div>
        </section>
        </>
    );
};

export default Technologies;