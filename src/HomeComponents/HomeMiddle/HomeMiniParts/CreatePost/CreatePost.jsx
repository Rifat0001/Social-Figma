import './CreatePost.css'
import profile from '../../../../assets/HomeMainFeeds/CreatePost/profilePic.png'
import img from '../../../../assets/HomeMainFeeds/CreatePost/Image.png';
import vdo from '../../../../assets/HomeMainFeeds/CreatePost/Video.png';
import poll from '../../../../assets/HomeMainFeeds/CreatePost/poll.png';
import more from '../../../../assets/HomeMainFeeds/CreatePost/More-Square.png';
const CreatePost = () => {
    return (
        <div className='bg-[#0A123E] give-post md:p-5 p-2 hi md:mx-6 mx-3'>
            <div className="top-part mx-2 md:mx-0 flex gap-2">
                <div className='w-1/4 md:w-1/12'>
                    <img className='profile-create-img' src={profile} />
                </div>
                <div className='w-3/4 md:w-11/12'>
                    <input className='write-post w-full  p-5 text-xs' placeholder='tell your friends about your thought...' type="text" />
                </div>
            </div>
            <div className="bottom-part grid grid-cols-4 gap-2">
                <div className='w-full md:h-[44px] h-[50px]  mt-4 rounded-lg bg-[#00072D] flex flex-col md:flex-row justify-center items-center gap-1'>
                    <div className='ms-4 me-2'>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <p className='text-white md:text-[14px] text-[10px] font-light'>Upload Images</p>
                    </div>
                </div>
                <div className='w-full md:h-[44px] h-[50px]  mt-4 rounded-lg bg-[#00072D] flex flex-col md:flex-row justify-center items-center gap-1'>
                    <div className='ms-4 me-2'>
                        <img src={vdo} alt="" />
                    </div>
                    <div>
                        <p className='text-white md:text-[14px] text-[10px] font-light'>Upload Videos</p>
                    </div>
                </div>
                <div className='w-full md:h-[44px] h-[50px]  mt-4 rounded-lg bg-[#00072D] flex flex-col md:flex-row justify-center items-center gap-1'>
                    <div className='ms-4 me-2'>
                        <img src={poll} alt="" />
                    </div>
                    <div>
                        <p className='text-white md:text-[14px] text-[10px] font-light'>Create Poll</p>
                    </div>
                </div>
                <div className='w-full md:h-[44px] h-[50px]  mt-4 rounded-lg bg-[#00072D] flex flex-col md:flex-row justify-center items-center gap-1'>
                    <div className='ms-2 me-2'>
                        <img src={more} alt="" />
                    </div>
                    <div>
                        <p className='text-white md:text-[14px] text-[10px] font-light'>More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;