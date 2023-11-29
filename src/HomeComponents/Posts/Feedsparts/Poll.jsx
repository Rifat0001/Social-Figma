import CommentSection from '../../../Global/CommentSection';
import Reply from '../../../Global/Reply';
import Reactions from '../../../Global/Reactions';
import MoreInfo from '../../../Global/MoreInfo';
import image3 from '../../../assets/HomeMainFeeds/hudson.png';
import img from '../../../assets/HomeMainFeeds/hudson.png';
import stat from '../../../assets/HomeMainFeeds/stat.png'
import {
    FaExclamationCircle,

    FaHeart,
    FaRegComments,
    FaTrashAlt,
} from "react-icons/fa";
import BorderLine from '../../../Global/BorderLine';
'../../../assets/HomeMainFeeds/hudson.png'
const Poll = () => {
    return (
        <div className=" mx-auto relative mt-8 text-white">
            <div className="pb-5 poli ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img className='post-profile-img' src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Aliyan Farooq musk</span>

                                <span className="text-[10px] flex items-center"> Share a poll</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@aliyan11</span>
                                <span className="text-xs">12 S </span>

                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex-none">
                        <MoreInfo></MoreInfo>
                    </div>
                </div>
                {/* poll start from here  */}
                <div className="relative  space-y-[40px] ms-24">
                    <p>What is better?</p>
                    <div className="flex absolute bottom-12 right-0 z-20 border state rounded-xl items-center w-[140px] h-[28px]">
                        <img className="ms-4" src={stat} alt="" />
                        <p className="text-xs ms-4">59 total votes</p>
                    </div>
                    <div className="poll-section z-10">
                        <form action="">
                            <label className="relative">
                                <input type="radio" id="google" name="radio" checked /> {/* Add 'checked' here */}
                                <span className="w-full">
                                    <p>Google</p>
                                    <p className="absolute right-12">89%</p>
                                </span>
                            </label>
                            <label className="relative ">
                                <input type="radio" id="defont" name="radio" />
                                <span className="w-full">
                                    <p>Defont</p>
                                    <p className="absolute right-12">90%</p>
                                </span>
                            </label>
                        </form>
                    </div>
                    <Reactions></Reactions>
                </div>
            </div>
            <div className="ms-12">
                <BorderLine></BorderLine>
            </div>
            <div className="">
                {/* <!-- Card 1 --> */}
                <div className="transform ps-16 transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-14 h-0.5 bg-[#00E7FC] absolute top-8 left-[0px] z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="time2">
                        <div className="flex items-start justify-start gap-2">
                            <img src={image3} alt="" className='comment-profile-img' />
                            <div>
                                <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                                    <div className="flex items-center justify-between gap-20">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="font-bold">Juan Gutierrez</span>
                                            <span className="text-[16px] profile-user">
                                                @juangutierrz110
                                            </span>
                                            <span className="text-[#A6A6A6]">1 W</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <FaExclamationCircle color="#8F8F8F" />
                                            <FaTrashAlt color="#8F8F8F" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[20px] profile-user">
                                            @Oblivion1122
                                        </span>
                                        <span>wow !! what a view , i love it </span>

                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-start py-4">
                                        <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                                            <div className="flex items-center justify-center gap-3 px-2">
                                                <div className=" text-white">200.8K</div>
                                                <FaHeart color="#FF0000" />
                                            </div>
                                            <div className="pro-side flex justify-center items-center gap-5 px-2">
                                                <h2 className="text-white">4.2K</h2>
                                                <FaRegComments color="#3ADF00" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="friend-bd-border  px-5">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Reply></Reply>
                <div className="ms-6 mt-4">
                    <CommentSection></CommentSection>
                </div>
            </div>
        </div >
    );
};

export default Poll;