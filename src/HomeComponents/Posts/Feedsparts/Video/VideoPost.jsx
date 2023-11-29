import image3 from '../../../../assets/HomeMainFeeds/hudson.png';
import img from '../../../../assets/HomeMainFeeds/hudson.png';
// import eye from '../../../assets/eye.png'
'../../../../assets/HomeMainFeeds/hudson.png'
import {
    FaEllipsisH,
    FaExclamationCircle,
    FaHeart,
    FaRegComments,
    FaTrashAlt,
} from "react-icons/fa";
import VideoComponent from './VideoComponent';
import Reactions from '../../../../Global/Reactions';
import Reply from '../../../../Global/Reply';
import CommentSection from '../../../../Global/CommentSection';
import MoreInfo from '../../../../Global/MoreInfo';
import BorderLine from '../../../../Global/BorderLine';
const VideoPost = () => {
    return (
        <div className=" mx-auto relative text-white mt-8">
            <div className="pb-5 videoLine ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img className='post-profile-img' src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Aliyan Farooq musk</span>

                                <span className="text-[10px]">shared a video</span>
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
                <div className="space-y-[40px]">
                    <div className="ms-20 ">
                        <p className='my-4'>Had a amazing trip, we had a lot of fun and enjoyed.</p>
                        {/* todo add video  */}
                        <div className="event-sec pb-0 ">
                            <VideoComponent></VideoComponent>
                        </div>
                        <div className="flex gap-2 items-center absolute right-0 mt-2">
                            <div className="eye">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                    <path d="M16 9.28571L12.4444 13L9.95556 10.4L11.0222 9.28571L12.4444 10.7714L14.9333 8.17143L16 9.28571ZM7.82222 3.34286C8.38802 3.34286 8.93064 3.57765 9.33072 3.99559C9.73079 4.41353 9.95556 4.98037 9.95556 5.57143C9.95556 6.16248 9.73079 6.72933 9.33072 7.14727C8.93064 7.56521 8.38802 7.8 7.82222 7.8C7.25643 7.8 6.71381 7.56521 6.31373 7.14727C5.91365 6.72933 5.68889 6.16248 5.68889 5.57143C5.68889 4.98037 5.91365 4.41353 6.31373 3.99559C6.71381 3.57765 7.25643 3.34286 7.82222 3.34286ZM7.82222 9.28571C8.17778 9.28571 8.512 9.23372 8.832 9.12971C8.64 9.65714 8.53333 10.192 8.53333 10.7714V11.1057L7.82222 11.1429C4.26667 11.1429 1.23022 8.83257 0 5.57143C1.23022 2.31029 4.26667 0 7.82222 0C11.3778 0 14.4142 2.31029 15.6444 5.57143C15.4667 6.04686 15.2462 6.50743 14.9902 6.94571C14.3502 6.54457 13.5964 6.31429 12.8 6.31429C12.2453 6.31429 11.7333 6.42571 11.2284 6.62629C11.328 6.292 11.3778 5.94286 11.3778 5.57143C11.3778 4.58634 11.0032 3.6416 10.3364 2.94503C9.66958 2.24847 8.76521 1.85714 7.82222 1.85714C6.87923 1.85714 5.97486 2.24847 5.30806 2.94503C4.64127 3.6416 4.26667 4.58634 4.26667 5.57143C4.26667 6.55652 4.64127 7.50126 5.30806 8.19783C5.97486 8.89439 6.87923 9.28571 7.82222 9.28571Z" fill="url(#paint0_linear_146_16151)" />
                                    <path d="M16 9.28571L12.4444 13L9.95556 10.4L11.0222 9.28571L12.4444 10.7714L14.9333 8.17143L16 9.28571ZM7.82222 3.34286C8.38802 3.34286 8.93064 3.57765 9.33072 3.99559C9.73079 4.41353 9.95556 4.98037 9.95556 5.57143C9.95556 6.16248 9.73079 6.72933 9.33072 7.14727C8.93064 7.56521 8.38802 7.8 7.82222 7.8C7.25643 7.8 6.71381 7.56521 6.31373 7.14727C5.91365 6.72933 5.68889 6.16248 5.68889 5.57143C5.68889 4.98037 5.91365 4.41353 6.31373 3.99559C6.71381 3.57765 7.25643 3.34286 7.82222 3.34286ZM7.82222 9.28571C8.17778 9.28571 8.512 9.23372 8.832 9.12971C8.64 9.65714 8.53333 10.192 8.53333 10.7714V11.1057L7.82222 11.1429C4.26667 11.1429 1.23022 8.83257 0 5.57143C1.23022 2.31029 4.26667 0 7.82222 0C11.3778 0 14.4142 2.31029 15.6444 5.57143C15.4667 6.04686 15.2462 6.50743 14.9902 6.94571C14.3502 6.54457 13.5964 6.31429 12.8 6.31429C12.2453 6.31429 11.7333 6.42571 11.2284 6.62629C11.328 6.292 11.3778 5.94286 11.3778 5.57143C11.3778 4.58634 11.0032 3.6416 10.3364 2.94503C9.66958 2.24847 8.76521 1.85714 7.82222 1.85714C6.87923 1.85714 5.97486 2.24847 5.30806 2.94503C4.64127 3.6416 4.26667 4.58634 4.26667 5.57143C4.26667 6.55652 4.64127 7.50126 5.30806 8.19783C5.97486 8.89439 6.87923 9.28571 7.82222 9.28571Z" fill="black" fill-opacity="0.2" />
                                    <defs>
                                        <linearGradient id="paint0_linear_146_16151" x1="1.88816" y1="0.764706" x2="16.7194" y2="15.7019" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p className="skinny">1000 k</p>
                        </div>
                    </div>

                    <div className="text-end">
                        <Reactions></Reactions>


                    </div>
                </div>
                <div className="ms-10">
                    <BorderLine></BorderLine>
                </div>
            </div>

            <div className="">
                {/* <!-- Card 1 --> */}
                <div className="transform ps-10 transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-8 h-0.5 bg-[#00E7FC] absolute top-8 left-[2px] z-0"></div>

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
                <div className="mt-4 ms-8">
                    <CommentSection></CommentSection>
                </div>
            </div>
        </div >
    );
};

export default VideoPost;