import Img from '../assets/HomeMainFeeds/CreatePost/profilePic.png';
import './GlobalDesign.css'
const CommentSection = () => {
    return (
        <div >
            <div className="md:ms-0 ms-9 flex justify-end">
                <div className="  bg-[#EC46E5] w-[100%] h-[1px]"></div>
            </div>
            <div className="pb-5 md:ms-0 ms-9 post-end pt-5">
                <div className="flex  items-center justify-start gap-5">
                    <img src={Img} className='comment-profile-img' alt="" />
                    <input type="text" name="" className="bg-[#00072D] text-white rounded-[48px] w-full p-3" placeholder="Write a comment and press enter" />
                </div>
            </div>
        </div>
    );
};

export default CommentSection;