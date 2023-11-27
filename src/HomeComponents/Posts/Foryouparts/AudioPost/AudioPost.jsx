import img from '../../../../assets/HomeMainFeeds/hudson.png';
// import rec from '../../../assets/reply/rec.png'

import {
    FaEllipsisH,
    FaStar,
    FaStarHalfAlt,
    FaHeart,
    FaRegComments
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import './Wave.css'
import AudioPlayer from './AudioPlayer';
import Reactions from '../../../../Global/Reactions';
import CommentSection from '../../../../Global/CommentSection.jsx';
import MoreInfo from '../../../../Global/MoreInfo.jsx';
const AudioPost = () => {
    return (
        <div className=" mx-auto relative mt-8 text-white">
            <div className="pb-5 ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img className='post-profile-img' src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Kevin Alexander</span>

                                <span className="text-[10px] flex items-center">added a new audio</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@kevinalexa3546</span>
                                <span className="text-xs">12 S</span>
                            </p>

                        </div>



                    </div>

                    <div className="flex-none">
                        <MoreInfo></MoreInfo>
                    </div>
                </div>
                <div><p className='post-mini-des  mt-2 font-light'>boredom is killing me!!</p></div>
                <div className=' mt-4'>
                    <AudioPlayer></AudioPlayer>
                </div>

            </div>
            <div className="">
                <Reactions></Reactions>
                <div className="mt-5">
                    <CommentSection></CommentSection>
                </div>
            </div>
        </div >
    );
};

export default AudioPost;