import React from 'react';
import SingleImage from '../../../Posts/Foryouparts/SingleImage';
import SingleImage2 from '../../../Posts/Foryouparts/SingleImage2';
import CreateApost from '../../../Posts/Foryouparts/CreateApost';
import AudioPost from '../../../Posts/Foryouparts/AudioPost/AudioPost';

const ForYou = () => {
    return (
        <div className='mx-3 md:mx-6 bg-[#0A123E] rounded-xl md:px-8 px-3 pb-80 pt-6'>
            <SingleImage></SingleImage>
            <SingleImage2></SingleImage2>
            <AudioPost></AudioPost>
            <CreateApost></CreateApost>
        </div>
    );
};

export default ForYou;