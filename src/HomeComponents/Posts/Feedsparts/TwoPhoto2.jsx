import Img from '../../../assets/HomeMainFeeds/hudson.png';
import image1 from '../../../assets/HomeMainFeeds/g3.png';
import image2 from '../../../assets/HomeMainFeeds/g4.png';
import image3 from '../../../assets/HomeMainFeeds/p3.png';
import gif from '../../../assets/HomeMainFeeds/gif.png';
import image5 from '../../../assets/HomeMainFeeds/mik.png';
'../../../assets/HomeMainFeeds/gif.png'
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
const TwoPhoto2 = () => {
    return (
        <div className=" mx-auto relative text-white mt-8">
            <div className="pb-5 for-you-two-2">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <circle cx="6" cy="6" r="5.5" fill="#00072D" fill-opacity="0.91" stroke="url(#paint0_linear_146_14668)" />
                                    <path d="M3.48707 9.4934L2.20109 9.21282C2.08418 9.18944 1.99065 9.12896 1.92051 9.03138C1.85036 8.93412 1.82308 8.82703 1.83867 8.71012L1.96727 7.38907L1.09046 6.38366C1.01253 6.29793 0.973557 6.19661 0.973557 6.0797C0.973557 5.96279 1.01253 5.86147 1.09046 5.77574L1.96727 4.77034L1.83867 3.44928C1.82308 3.33237 1.85036 3.22529 1.92051 3.12802C1.99065 3.03044 2.08418 2.96996 2.20109 2.94658L3.48707 2.666L4.16513 1.52031C4.22748 1.41899 4.31322 1.35274 4.42233 1.32156C4.53144 1.29039 4.64056 1.29429 4.74967 1.33326L5.96551 1.84765L7.18135 1.33326C7.29046 1.29429 7.39958 1.29039 7.50869 1.32156C7.6178 1.35274 7.70354 1.41899 7.76589 1.52031L8.44395 2.666L9.72993 2.94658C9.84684 2.96996 9.94037 3.03044 10.0105 3.12802C10.0807 3.22529 10.1079 3.33237 10.0923 3.44928L9.96375 4.77034L10.8406 5.77574C10.9185 5.86147 10.9575 5.96279 10.9575 6.0797C10.9575 6.19661 10.9185 6.29793 10.8406 6.38366L9.96375 7.38907L10.0923 8.71012C10.1079 8.82703 10.0807 8.93412 10.0105 9.03138C9.94037 9.12896 9.84684 9.18944 9.72993 9.21282L8.44395 9.4934L7.76589 10.6391C7.70354 10.7404 7.6178 10.8067 7.50869 10.8378C7.39958 10.869 7.29046 10.8651 7.18135 10.8261L5.96551 10.3118L4.74967 10.8261C4.64056 10.8651 4.53144 10.869 4.42233 10.8378C4.31322 10.8067 4.22748 10.7404 4.16513 10.6391L3.48707 9.4934ZM5.14716 7.41245C5.23289 7.49818 5.342 7.54105 5.4745 7.54105C5.60699 7.54105 5.71611 7.49818 5.80184 7.41245L7.78927 5.42502C7.88279 5.33149 7.92956 5.22035 7.92956 5.0916C7.92956 4.96316 7.88279 4.85217 7.78927 4.75865C7.69574 4.66512 7.58476 4.61836 7.45632 4.61836C7.32756 4.61836 7.21642 4.66512 7.12289 4.75865L5.4745 6.40704L4.79643 5.74067C4.70291 5.65494 4.59192 5.61394 4.46348 5.61768C4.33473 5.62174 4.22748 5.66663 4.14175 5.75236C4.05602 5.83809 4.01315 5.94721 4.01315 6.0797C4.01315 6.2122 4.05602 6.32131 4.14175 6.40704L5.14716 7.41245Z" fill="#00E7FC" />
                                    <defs>
                                        <linearGradient id="paint0_linear_146_14668" x1="6" y1="0" x2="6" y2="12" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#08E2FB" />
                                            <stop offset="0.510417" stop-color="#0A123E" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
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
                <div className="">

                    {/* second card */}

                    <div className="transform ps-16 for-you-two-reply-2 transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 text-white rounded mb-1 flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        <div className="w-14 h-0.5 bg-[#00E7FC] absolute top-8 left-[0px] z-0"></div>

                        {/* <!-- Content that showing in the box --> */}
                        <div className="flex items-start justify-start gap-2">
                            <img src={image3} className='comment-profile-img' alt="" width={45} height={40} />
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
                                    <div className="gap-2">
                                        <p> <span className="text-[14px] me-2 profile-user">
                                            #classic
                                        </span></p>
                                        <img className="mt-2 w-[100px] h-[65px] rounded-md " src={gif} alt="" />
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
                        <div className="">
                            <div className="flex items-start justify-start gap-2">
                                <img src={image5} className='comment-profile-img' alt="" width={35} height={40} />
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

export default TwoPhoto2;