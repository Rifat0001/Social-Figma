import {
    FaAngleDown,
    FaEllipsisH,
    FaGlobe,
    FaHeart,
    FaRegComments,
} from "react-icons/fa";
import Img from '../../../assets/HomeMainFeeds/chesi.png';
import couple from '../../../assets/HomeMainFeeds/g2.jpg';
import Reply from "../../../Global/Reply";
import CommentSection from "../../../Global/CommentSection";
'../../../assets/HomeMainFeeds/'
import './Foryou.css'
import MoreInfo from "../../../Global/MoreInfo";
import Reactions from "../../../Global/Reactions";
import './Foryou.css'
const CreateApost = () => {
    return (
        <div>
            <div className="mt-8 mx-auto relative">
                <div className="pb-5 couple text-white">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center justify-start gap-5">
                            <img className="post-profile-img" src={Img} alt="" />

                            <div className="flex-col">
                                <p className="flex items-center justify-start gap-2">
                                    <span className="profile-name">Oblivion Isme</span>
                                    <span className=" profile-user md:hidden block">@Oblivion1122</span>
                                    <span className="text-[10px] hidden md:block">changed his profile banner</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className=" profile-user hidden md:block">@Oblivion1122</span>
                                    <span className="text-xs">12 s</span>
                                    <div className=" hidden md:block">
                                        <FaGlobe />
                                        <FaAngleDown />
                                    </div>
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
                        <div className="md:ms-0 ms-9 pt-3 space-y-4">
                            <p className="post-text">Music event update interested ppl can dm me for more information</p>
                        </div>
                        <Reactions></Reactions>
                    </div>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div>
    );
};

export default CreateApost;