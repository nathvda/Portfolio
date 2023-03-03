import React from 'react';
import JourneyBlock from './components/JourneyBlock';

const Journey = () => {

    return (
        <>
            <section>
            <h2>My resume</h2>
            <JourneyBlock date="May 2023" title="Chapter IV">
            It's time.<br/>
            The <b>Flying Coder</b> is finally ready. It's time for me to set sail. <b>Be/Code</b> is still with be for a few months, but I will need to find another home port for the time being. Maybe more. You never know what the ocean has got in store for you.
            </JourneyBlock>
            <JourneyBlock date="February 2023" title="Chapter III">
            Yet another storm.<br/>
            For the first time, I had the opportunity to <b>work with my own subcrew</b>. It isn't quite the same as being a captain, but at least, I could work for a bit. It was quite the adventure, if I am being honest, but I <b>gained  confidence</b> and got out of the project with a <b>better insight on leadership</b> and what it all means.</JourneyBlock>
            
            <JourneyBlock date="January 2023" title="Chapter II">
            The wind blows through the sails.<br/>
            We just navigated our ways through the waters of the <b>PHP</b> islands. We lost a few sailors on the way, but the crew still feels it's going well. They say the <b>MySQL</b> triangle is a place many get lost in, but we made it through without too much trouble. Now it's time for another great journey.</JourneyBlock>
            <JourneyBlock date="November 2023" title="Chapter I">
            The sea is calm today. <br/>
            I'm embarking for a long journey today. I don't know where it will take me, but lots of discoveries will be on the way. I still have a lot to learn to be come a great captain. <b>HTML, CSS and Javascript</b> are waiting for me at the port of <b>Be/Code</b>. I just joined their crew as a <b>Junior Web Developers</b>. Let's see where this takes me.
            </JourneyBlock>
            <JourneyBlock date="Before 2023" title="Prologue">I'm itching to move. The sea of code is waiting for me. The land has given me everything it had, from a <b>Master in Movie analysis and writing</b> to a <b>Bachelor's Degree in Tranlsation in German and English</b>... I think it's time for me to take all of this with me an set sails for another place.</JourneyBlock>
        </section>
        <img className="flyingCoder" src={"/images/FC.png"}/>
        </>
    );
};

export default Journey;