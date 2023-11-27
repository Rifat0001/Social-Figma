import {
    FaAngleDown,
    FaEllipsisH,
    FaGlobe,
    FaHeart,
    FaRegComments,
} from "react-icons/fa";
import Img from '../../../assets/HomeMainFeeds/tyson.png';
import couple from '../../../assets/HomeMainFeeds/g2.jpg';
import Reply from "../../../Global/Reply";
import CommentSection from "../../../Global/CommentSection";
'../../../assets/HomeMainFeeds/'
import './Foryou.css'
import MoreInfo from "../../../Global/MoreInfo";
import Reactions from "../../../Global/Reactions";
const SingleImage2 = () => {
    return (
        <div>
            <div className="mt-8 mx-auto relative">
                <div className="pb-5 couple text-white">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center justify-start gap-5">
                            <img className="post-profile-img" src={Img} alt="" />

                            <div className="flex-col">
                                <p className="flex items-center justify-start gap-2">
                                    <span>Oblivion Isme</span>

                                    <span className="text-[10px]">added a photo</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-[16px] profile-user">@Oblivion1122</span>
                                    <span className="text-xs">12 s</span>
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

                    <div className="space-y-[20px]">
                        <div className=" pt-3 space-y-4">
                            <div className="couple-img">
                                <img src={couple} className="rounded-xl" alt="" />
                            </div>
                        </div>
                        <Reactions></Reactions>
                    </div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div>
    );
};

export default SingleImage2;