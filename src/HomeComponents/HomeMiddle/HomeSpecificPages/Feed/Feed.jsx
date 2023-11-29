import React from 'react';
import BirthdayWish from '../../../Posts/Feedsparts/BirthdayWish';
import TwoPhoto1 from '../../../Posts/Feedsparts/TwoPhoto1';
import TwoPhoto2 from '../../../Posts/Feedsparts/TwoPhoto2';
import Event from '../../../Posts/Feedsparts/Event';
import Poll from '../../../Posts/Feedsparts/Poll';
import VideoPost from '../../../Posts/Feedsparts/Video/VideoPost';
import ArticlePost from '../../../Posts/Feedsparts/ArticlePost';

const Feed = () => {
    return (
        <div className='mx-3 md:mx-6 bg-[#0A123E] rounded-xl md:px-8 px-3 pb-80 pt-6'>
            <BirthdayWish></BirthdayWish>
            <TwoPhoto1></TwoPhoto1>
            {/* <TwoPhoto2></TwoPhoto2> */}
            {/* <Event></Event>
            <Poll></Poll>
            <VideoPost></VideoPost>
            <ArticlePost></ArticlePost> */}
        </div>
    );
};

export default Feed;