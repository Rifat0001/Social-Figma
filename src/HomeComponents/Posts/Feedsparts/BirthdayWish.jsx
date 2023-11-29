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
                                <div className="flex flex-col">
                                    <span className="profile-name" >Oblivion Isme</span>
                                    <span className="text-[16px] profile-user md:hidden block">@Oblivion1122</span>
                                </div>
                                <FaArrowRight />
                                <div className="flex md:flex-row md:gap-3 gap-0 flex-col">
                                    <Link to='/othersProfile/timeline/feeds' className="profile-name"> Kevin Alexander</Link>
                                    <span className="text-[16px] profile-user">@kevinalexa3546</span>
                                </div>
                            </p>
                            <p className="flex md:mt-0 mt-2 items-center gap-3">
                                <span className="text-[16px] profile-user hidden md:block">@Oblivion1122</span>
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

                <div className="space-y-[20px] ms-10">
                    <div className=" pt-3 space-y-4">
                        <p className="post-text">happy birthdayyyy</p>
                    </div>
                    <Reactions></Reactions>
                </div>
            </div>
            <div className=""> <CommentSection></CommentSection></div>
        </div>
    );
};

export default BirthdayWish;