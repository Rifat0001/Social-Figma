import Img from '../../../assets/HomeMainFeeds/mik.png';
import image1 from '../../../assets/HomeMainFeeds/g2.jpg';
import image2 from '../../../assets/HomeMainFeeds/g1.jpg';
import image3 from '../../../assets/HomeMainFeeds/p2.png';
import image4 from '../../../assets/HomeMainFeeds/p3.png';
import image5 from '../../../assets/HomeMainFeeds/mik.png';
import './Feeds.css'
import {
    FaAngleDown,
    FaEllipsisH,
    FaExclamationCircle,
    FaGlobe,
    FaHeart,
    FaRegComments,
    FaTrashAlt,
} from "react-icons/fa";
import Reactions from '../../../Global/Reactions';
import BorderLine from '../../../Global/BorderLine';
import Reply from '../../../Global/Reply';
import CommentSection from '../../../Global/CommentSection';
import MoreInfo from '../../../Global/MoreInfo';
const TwoPhoto1 = () => {
    return (
        <div className=" mx-auto relative text-white mt-8">
            <div className="pb-5 for-you-two">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img className='post-profile-img' src={Img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Oblivion Isme</span>

                                <span className="text-[10px]">Added Photos</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-[16px] profile-user">@Oblivion1122</span>
                                <span className="text-xs">12 S - Translate</span>
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
                <div className="space-y-[40px] me-6">
                    <div className="ps-[105px] pt-3 space-y-4">
                        <h2 className=" ">
                            “Hi All , i am sharing my recent fun posts here , share your
                            thoughts.”{" "}
                        </h2>
                        <div className="flex items-center gap-5">
                            <img src={image1} className='double-img w-1/2' alt="" />
                            <img src={image2} className='double-img w-1/2' alt="" />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <Reactions></Reactions>
                </div>
                <div className="ms-12">
                    <BorderLine></BorderLine>
                </div>
            </div>
            <div className="">
                {/* <!-- Card 1 --> */}
                <div className="transform ps-16 transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1  flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-14 h-0.5 bg-[#00E7FC] absolute top-8 left-[2px] z-0"></div>

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
                {/* second card */}

                <div className="transform ps-16 for-you-two-reply transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-14 h-0.5 bg-[#00E7FC] absolute top-8 left-[2px] z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex items-start justify-start gap-2">
                        <img src={image3} alt="" className='comment-profile-img ' />
                        <div>
                            <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                                <div className="flex items-center justify-between gap-20">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="font-bold">Juan Gutierrez</span>
                                        <span className="text-[16px] profile-user">
                                            @juangutierrz110
                                        </span>
                                        <span className="text-[#A6A6A6]">5 d</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <FaExclamationCircle color="#8F8F8F" />
                                        <FaTrashAlt color="#8F8F8F" />
                                    </div>
                                </div>
                                <div className="flex  gap-2">
                                    <p>
                                        <span className="text-[20px] me-2 profile-user">
                                            @Oblivion1122
                                        </span>
                                        <span className=" pr-20">
                                            It seems like you enjoy so much last night !?{" "}
                                        </span></p>
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
                {/* reply of comment 3 */}
                <div className="transform transition cursor-pointer  ml-10 relative flex items-center px-6 ps-32 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-[38px] h-0.5 bg-[#00E7FC] absolute top-8 left-[85px] z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="time2">
                        <div className="flex items-start justify-start gap-2">
                            <img src={image5} alt="" className='comment-profile-img' />
                            <div>
                                <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                                    <div className="flex items-center justify-between gap-20">
                                        <div className="flex items-center justify-between gap-3">

                                            <span className="font-bold">Kevin Alexander</span>
                                            <span className="text-[16px] profile-user">
                                                @kevinalexa3546
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
                {/* reply of comment 3 */}
                <div className="transform transition cursor-pointer  ml-10 relative flex items-center px-6 ps-32 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-[38px] h-0.5 bg-[#00E7FC] absolute top-8 left-[85px] z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="time2">
                        <div className="flex items-start justify-start gap-2">
                            <img src={image5} alt="" className='comment-profile-img' />
                            <div>
                                <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                                    <div className="flex items-center justify-between gap-20">
                                        <div className="flex items-center justify-between gap-3">

                                            <span className="font-bold">Kevin Alexander</span>
                                            <span className="text-[16px] profile-user">
                                                @kevinalexa3546
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
                {/* third card */}
                <div className="transform transition cursor-pointer  ml-10 relative flex ps-16 items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-14 h-0.5 bg-[#00E7FC] absolute top-8 left-[2px] z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex items-start justify-start gap-2">
                        <img src={image4} alt="" className='comment-profile-img' />
                        <div>
                            <div className="p-3 rounded-xl border-[1px] border-b-0 shadow-lg">
                                <div className="flex items-center justify-between gap-20">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="font-bold">Kevin Alexander</span>
                                        <span className="text-[16px] profile-user">
                                            @kevinalexa3546
                                        </span>
                                        <span className="text-[#A6A6A6]">20 h</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <FaExclamationCircle color="#8F8F8F" />
                                        <FaTrashAlt color="#8F8F8F" />
                                    </div>
                                </div>
                                <p className=" pr-20">
                                    <span className="text-[20px] profile-user">
                                        @Oblivion1122
                                    </span> {' '}
                                    wow it seems like a movie scene i wish i was
                                    There.. sorry I was busy doing some other stuff.{" "}
                                </p>
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
                <div className="">
                    <Reply></Reply>
                </div>
                <div className="mt-6 mx-4">
                    <CommentSection></CommentSection>
                </div>
            </div>
        </div >
    );
};

export default TwoPhoto1;