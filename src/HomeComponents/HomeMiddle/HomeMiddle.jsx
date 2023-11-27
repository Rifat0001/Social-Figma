import Story from './HomeMiniParts/Story/Story';
import './HomeMiddle.css'
import CreatePost from './HomeMiniParts/CreatePost/CreatePost';
import GoodWish from './HomeMiniParts/GoodWish/GoodWish';
import HomeFilter from './HomeMiniParts/HomeFilter/HomeFilter';
const HomeMiddle = () => {
    return (
        <div className='home-middle-bg'>
            <Story></Story>
            <CreatePost></CreatePost>
            <GoodWish></GoodWish>
            <HomeFilter></HomeFilter>
        </div>
    );
};

export default HomeMiddle;