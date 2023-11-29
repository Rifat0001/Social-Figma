import image5 from '../assets/HomeMainFeeds/CreatePost/profilePic.png';
import gif from '../assets/HomeMainFeeds/CreatePost/ren.png'
import img from '../assets/HomeMainFeeds/CreatePost/Image.png'
import emoji from '../assets/HomeMainFeeds/CreatePost/emj.png'
import send from '../assets/HomeMainFeeds/CreatePost/send.png'
const Reply = () => {
    return (
        <div className="ms-24 hidden">
            <div className="flex items-center justify-start gap-2">
                <img src={image5} alt="" className='reply-profile-img' />
                <div>
                    <div className="bg-[#00072D] h-[22px] w-[620px] ms-2">
                        <p className="ms-4 font-light text-xs text-[#A6A6A6]">
                            Reply to <span className="text-white font-normal">Kevin Alexander</span> .Cancel</p>
                    </div>
                    <div className="bg-[#00072D] h-[40px] relative rounded-[200px] w-full">
                        <div>
                            <input className="h-[40px] rounded-[200px] p-4 w-[640px] bg-[#00072D]" type="text" />
                        </div>
                        <div className="flex absolute top-2 right-4 gap-2">
                            <button><img src={send} alt="" /></button>
                            <button><img src={img} alt="" /></button>
                            <button><img src={gif} alt="" /></button>

                            <button><img src={emoji} alt="" /></button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reply;