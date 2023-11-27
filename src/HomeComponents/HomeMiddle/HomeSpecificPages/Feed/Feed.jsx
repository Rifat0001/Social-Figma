import React from 'react';
import BirthdayWish from '../../../Posts/Feedsparts/BirthdayWish';
import TwoPhoto1 from '../../../Posts/Feedsparts/TwoPhoto1';
import TwoPhoto2 from '../../../Posts/Feedsparts/TwoPhoto2';

const Feed = () => {
    return (
        <div className='mx-6 bg-[#0A123E] rounded-xl px-8 pb-80 pt-6'>
            <BirthdayWish></BirthdayWish>
            <TwoPhoto1></TwoPhoto1>
            <TwoPhoto2></TwoPhoto2>
        </div>
    );
};

export default Feed;