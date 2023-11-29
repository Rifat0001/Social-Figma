import profile from '../../../assets/HomeMainFeeds/hudson.png'
import artbg from '../../../assets/HomeMainFeeds/articlebg.png'
import btnBG from '../../../assets/HomeMainFeeds/btn.png'
import {
    FaAngleDown,
    FaEllipsisH,
    FaGlobe,
    FaHeart,
    FaRegComments
} from "react-icons/fa";
import MoreInfo from '../../../Global/MoreInfo';
import Reactions from '../../../Global/Reactions';
import CommentSection from '../../../Global/CommentSection';
const ArticlePost = () => {
    return (
        <div className=" mx-auto relative mt-8 text-white">
            <div className="pb-5 ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img className='post-profile-img' src={profile} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Aliyan Farooq musk</span>

                                <span className="text-[10px] flex items-center">created a new article</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@aliyan11</span>
                                <span className="text-xs">12 S</span>
                                <FaGlobe />
                                <FaAngleDown />
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex-none">
                        <MoreInfo></MoreInfo>
                    </div>
                </div>
                {/* poll start from here  */}
                <div className="mt-4 space-y-[40px] ms-20">
                    {/* article section started */}
                    <div>
                        <img src={artbg} alt="" className='w-full article-bg' />
                        <div className="article-bottom relative">
                        </div>
                        <div className="absolute top-[320px] ms-8">
                            <p className="text-[15px]  text-white font-[600]">The Concept Of Art</p>
                            <p className="text-[12px] font-light">Art can really take many forms and can really describe all possibilities</p>
                        </div>
                        <button className="article-button flex items-center justify-center absolute top-[290px] left-[400px]">
                            <img src={btnBG} className="" alt="" />
                        </button>
                    </div>
                    <div className="text-end">
                        <Reactions></Reactions>
                    </div>
                </div>
            </div>

            <div className="ms-8">
                {/* <!-- Card 1 --> */}


                <CommentSection></CommentSection>
            </div>
        </div >
    );
};

export default ArticlePost;