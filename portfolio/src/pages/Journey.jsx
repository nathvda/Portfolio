import React from 'react';
import JourneyBlock from './components/JourneyBlock';

const Journey = () => {
    return (
        <>
            <h2>My journey</h2>
            <JourneyBlock date="2023" title="Chapter II">Youhouhou</JourneyBlock>
            <JourneyBlock date="November 2023" title="Chapter I">Lorem ipsum dolor sit amet consectetur <b>adipisicing elit</b>. Assumenda necessitatibus dicta repellendus omnis, quae velit consectetur atque voluptas accusantium nam, laborum cupiditate suscipit. Eveniet sed tempore nemo, itaque voluptatem sapiente impedit mollitia quasi earum labore. Ab, voluptate! Sequi corporis, similique veniam ipsam minus recusandae aspernatur kldjsfklj
            dsfjkljdsf
            </JourneyBlock>
            <JourneyBlock date="Before 2023" title="Prologue">hkjhkjh</JourneyBlock>

        </>
    );
};

export default Journey;