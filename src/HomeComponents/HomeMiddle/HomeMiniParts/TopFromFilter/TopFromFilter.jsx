import React from 'react';
import Story from '../Story/Story';
import CreatePost from '../CreatePost/CreatePost';
import HomeFilter from '../HomeFilter/HomeFilter';
import GoodWish from '../GoodWish/GoodWish';

const TopFromFilter = () => {
    return (
        <div>
            <Story></Story>
            <CreatePost></CreatePost>
            <GoodWish></GoodWish>
            <HomeFilter></HomeFilter>
        </div>
    );
};

export default TopFromFilter;