import {
    FaAngleDown,
    FaArrowRight,
    FaEllipsisH,
    FaGlobe,
    FaHeart,
    FaRegComments,
} from "react-icons/fa";
import Img from '../../../assets/HomeMainFeeds/CreatePost/profilePic.png';
import CommentSection from "../../../Global/CommentSection";
'../../../assets/HomeMainFeeds/'
import MoreInfo from "../../../Global/MoreInfo";
import Reactions from "../../../Global/Reactions";
import './Feeds.css'
import { Link } from "react-router-dom";
const BirthdayWish = () => {
    return (
        <div className=" mx-auto relative">
            <div className="pb-5 couple text-white">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img className="post-profile-img" src={Img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Oblivion Isme</span>
                                <FaArrowRight />
                                <Link to='/othersProfile/timeline/feeds'> Kevin Alexander</Link>
                                <span className="text-[16px] profile-user">@kevinalexa3546</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@Oblivion1122</span>
                                <span className="text-xs">now</span>
                                <FaGlobe />
                                <FaAngleDown />
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <MoreInfo></MoreInfo>
                        </button>
                    </div>
                </div>

                <div className="space-y-[20px] ms-24">
                    <div className=" pt-3 space-y-4">
                        <p className="post-text">happy birthdayyyy</p>
                    </div>
                    <Reactions></Reactions>
                </div>
            </div>
            <div className="ms-10"> <CommentSection></CommentSection></div>
        </div>
    );
};

export default BirthdayWish;