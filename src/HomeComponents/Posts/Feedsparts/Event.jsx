// import image1 from "../../../assets/CreatePost/image-1.png";
// import image2 from "../../../assets/CreatePost/image-2.png";
// import Img from '../../../assets/HomeMainFeeds/hudson.png';
import image3 from '../../../assets/HomeMainFeeds/hudson.png';
import img from '../../../assets/HomeMainFeeds/hudson.png';
import family from '../../../assets/HomeMainFeeds/fam.png'
import ev from '../../../assets/HomeMainFeeds/evBg.png'
// import plus from '../../../assets/reply/plus.png'
// import cal from '../../../assets/reply/Calendar.png'
// import int from '../../../assets/reply/int.png'
'../../../assets/HomeMainFeeds/evBg.png'
import {
    FaEllipsisH,
    FaExclamationCircle,
    FaHeart,
    FaRegComments,
    FaTrashAlt,
} from "react-icons/fa";
import { HiOutlineBookmarkAlt } from "react-icons/hi";
import Reactions from "../../../Global/Reactions";
import Reply from "../../../Global/Reply";
import CommentSection from "../../../Global/CommentSection";
import MoreInfo from '../../../Global/MoreInfo';
import './Feeds.css'
import BorderLine from '../../../Global/BorderLine';
const Event = () => {
    return (
        <div className=" mx-auto relative text-white mt-8">
            <div className="pb-5 evet ">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-start gap-5">
                        <img className='post-profile-img' src={img} alt="" />

                        <div className="flex-col">
                            <p className="flex items-center justify-start gap-2">
                                <span>Aliyan Farooq musk</span>

                                <span className="text-[10px] flex items-center">
                                    <div className="loop-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                            <path d="M7.02813 3.9802C6.34999 5.15478 6.39925 6.43205 6.56026 7.29675L6.56601 7.32728L8.12098 6.97622C7.97044 6.13786 8.07212 5.35776 8.40763 4.77665C9.08461 3.60408 10.5638 3.18588 11.7047 3.84461C12.8457 4.50334 13.2231 5.99344 12.5461 7.16601C11.5174 8.94785 8.46295 8.79916 8.43213 8.79746C8.24995 8.78578 4.36599 8.59116 2.84676 11.2225C1.73057 13.1558 2.3695 15.6219 4.27119 16.7199C6.17288 17.8178 8.62805 17.1381 9.74424 15.2048C10.291 14.2578 10.4523 13.1083 10.2107 11.8801L10.2053 11.8536L8.65232 12.2132C8.81448 13.0586 8.71751 13.7974 8.36475 14.4084C7.68776 15.5809 6.2086 15.9991 5.06764 15.3404C3.92668 14.6817 3.54928 13.1916 4.22626 12.019C5.25501 10.2371 8.30943 10.3858 8.34025 10.3875C8.52242 10.3992 12.4064 10.5938 13.9256 7.96246C15.0418 6.02916 14.4029 3.56306 12.5012 2.46511C10.5995 1.36717 8.14433 2.04689 7.02813 3.9802Z" fill="#F8F8F8" />
                                            <path d="M9.926 5.97728L7.35225 8.55103L4.7785 5.97728L9.926 5.97728Z" fill="#F8F8F8" />
                                            <path d="M7.12124 13.2869L9.69499 10.7131L12.2687 13.2869L7.12124 13.2869Z" fill="#F8F8F8" />
                                        </svg>
                                    </div>
                                    Looped a event</span>
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
                    <div className=" ms-20 event-sec pt-3 space-y-4">
                        <div className="flex items-center ms-8">
                            <img className='post-profile-img' src={family} alt="" />
                            <div className="ms-4">
                                <p>Family <span className="text-xs text-light">Created a new event</span></p>
                                <p className="text-xs">12 S</p>
                            </div>
                        </div>
                        <div className=" relative">
                            <img src={ev} className="event-cover w-full" alt="" />
                            <div className="">
                                <div className="family absolute p-2 top-2 ms-4 ">
                                    <p className="text-xl font-semibold ">Host: <span className="profile-user font-bold">Family</span> Group</p>
                                </div>


                                <div className="absolute right-2 p-1 top-1 ">
                                    <button className="but text-[9px]">See more</button>
                                </div>
                                <div className="flex absolute top-56 ms-12  z-20">
                                    <div className="text-lg event-date text-center rounded-lg  font-semibold text-[#0A123E] me-4">
                                        <p>23</p>
                                        <p>Nov</p>
                                    </div>
                                    <div>
                                        <div className="squad p-1">
                                            <p>SQUAD DESIGN DISCUSSION & DINNER | EVENT</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#000000BF] z-10 absolute top-64 border-b-md rounded-lg h-[170px] w-full">
                                    <div className="flex ms-[120px] me-4 mt-2 place ">
                                        <div className="pbc w-32"><p className="ms-4">Taking Place</p></div>
                                        <div className="flex items-center pbc"><p className="text-xs ps-4 pe-20">Zoom Call At 8 AM</p></div>
                                        <div className="flex items-center"><p className="text-[8px] text-[#00E7FC] ms-4">https://www.figma.com/file/hktj</p></div>
                                    </div>
                                    <div className="flex">
                                        <div className="after p-2 text-[11px]">After a success of blossom fest we are all set again for another musical event that's going to be finest</div>
                                        <div className="going flex items-center ms-6">
                                            <div className="go text-[8px] flex place w-[100px]">
                                                <p className="pbc pe-3 ps-3">Going</p>
                                                <p className="ps-3">999.9k</p>
                                            </div>
                                            <div className="go text-[8px] flex place w-[100px] ms-2">
                                                <p className="pbc pe-3 ps-3">Interested</p>
                                                <p className="ps-3">5k</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="count flex">
                                        <div className="dates mt-2 grid grid-cols-4 gap-6 text-center ms-11 ">
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">11</p>
                                                </div>
                                                <p className="text-sm ">Days</p>
                                            </div>
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">23</p>
                                                </div>
                                                <p className="text-sm">Hours</p>
                                            </div>
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">31</p>
                                                </div>
                                                <p className="text-sm">Min</p>
                                            </div>
                                            <div className="">
                                                <div className="tar rounded-full">
                                                    <p className="text-[22px] font-semibold">51</p>
                                                </div>
                                                <p className="text-sm">Sec</p>
                                            </div>
                                        </div>
                                        {/* 2nd block  */}
                                        <div className="flex ms-20 mt-2">
                                            <div className="jo">
                                                <button className="join w-[112px] h-[37px] flex items-center tar justify-center">
                                                    <div className="plus-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M6.85714 16V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714Z" fill="#F8F8F8" />
                                                        </svg>
                                                    </div>
                                                    <p className="font-bold text-[lg]">Join</p>
                                                </button>
                                                <div className="flex items-center ms-[-10px] mt-1">
                                                    <div className="calender-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62333 0C9.91216 0 10.1466 0.234418 10.1466 0.523253L10.1469 1.11475C11.1656 1.18459 12.0116 1.53351 12.6104 2.13355C13.2641 2.79006 13.6081 3.73401 13.6046 4.86633V11.2312C13.6046 13.5558 12.1283 15 9.75275 15H3.85184C1.47627 15 0 13.5356 0 11.1782V4.86493C0 2.67228 1.31654 1.26484 3.46372 1.11499L3.46415 0.523253C3.46415 0.234418 3.69856 0 3.9874 0C4.27624 0 4.51065 0.234418 4.51065 0.523253L4.51044 1.10162H9.09973L9.10007 0.523253C9.10007 0.234418 9.33449 0 9.62333 0ZM12.5581 6.21206H1.04651V11.1782C1.04651 12.9684 2.04278 13.9535 3.85184 13.9535H9.75275C11.5618 13.9535 12.5581 12.9865 12.5581 11.2312L12.5581 6.21206ZM9.90777 10.602C10.1966 10.602 10.431 10.8364 10.431 11.1253C10.431 11.4141 10.1966 11.6485 9.90777 11.6485C9.61893 11.6485 9.38172 11.4141 9.38172 11.1253C9.38172 10.8364 9.61265 10.602 9.90149 10.602H9.90777ZM6.81185 10.602C7.10069 10.602 7.3351 10.8364 7.3351 11.1253C7.3351 11.4141 7.10069 11.6485 6.81185 11.6485C6.52302 11.6485 6.28581 11.4141 6.28581 11.1253C6.28581 10.8364 6.51674 10.602 6.80557 10.602H6.81185ZM3.70945 10.602C3.99828 10.602 4.2327 10.8364 4.2327 11.1253C4.2327 11.4141 3.99828 11.6485 3.70945 11.6485C3.42061 11.6485 3.18271 11.4141 3.18271 11.1253C3.18271 10.8364 3.41433 10.602 3.70317 10.602H3.70945ZM9.90777 7.89038C10.1966 7.89038 10.431 8.1248 10.431 8.41364C10.431 8.70247 10.1966 8.93689 9.90777 8.93689C9.61893 8.93689 9.38172 8.70247 9.38172 8.41364C9.38172 8.1248 9.61265 7.89038 9.90149 7.89038H9.90777ZM6.81185 7.89038C7.10069 7.89038 7.3351 8.1248 7.3351 8.41364C7.3351 8.70247 7.10069 8.93689 6.81185 8.93689C6.52302 8.93689 6.28581 8.70247 6.28581 8.41364C6.28581 8.1248 6.51674 7.89038 6.80557 7.89038H6.81185ZM3.70945 7.89038C3.99828 7.89038 4.2327 8.1248 4.2327 8.41364C4.2327 8.70247 3.99828 8.93689 3.70945 8.93689C3.42061 8.93689 3.18271 8.70247 3.18271 8.41364C3.18271 8.1248 3.41433 7.89038 3.70317 7.89038H3.70945ZM9.09973 2.14813H4.51044L4.51065 2.81929C4.51065 3.10812 4.27624 3.34254 3.9874 3.34254C3.69856 3.34254 3.46415 3.10812 3.46415 2.81929L3.46378 2.16397C1.90083 2.29526 1.04651 3.24268 1.04651 4.86493V5.16556H12.5581L12.5581 4.86493C12.5609 4.00331 12.3292 3.33354 11.8695 2.87308C11.4659 2.4683 10.8759 2.22655 10.1472 2.1643L10.1466 2.81929C10.1466 3.10812 9.91216 3.34254 9.62333 3.34254C9.33449 3.34254 9.10007 3.10812 9.10007 2.81929L9.09973 2.14813Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p className="ms-2 text-xs">12-November-2022</p>
                                                </div>
                                            </div>
                                            <div className="jo ms-10">
                                                <button className="join w-[112px] h-[37px] flex items-center tar justify-center">
                                                    <div className="interest-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                                            <path d="M11.6 1.48665C10.4 1.48665 9.264 2.16307 8.8 3.12196V10.9566C12.2 8.07994 14.4 6.09526 14.4 4.08828C14.4 2.60163 13.2 1.48665 11.6 1.48665ZM11.6 0C14.064 0 16 1.79141 16 4.08828C16 6.89062 13.28 9.18749 9.16 12.6588L8 13.64L6.84 12.6588C2.72 9.18749 0 6.89062 0 4.08828C0 1.79141 1.936 0 4.4 0C5.792 0 7.128 0.602093 8 1.54611C8.872 0.602093 10.208 0 11.6 0Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <p className="font-bold text-[lg]">Interested</p>
                                                </button>
                                                <div className="flex items-center ms-[10px] mt-1">
                                                    <div className="calender-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62333 0C9.91216 0 10.1466 0.234418 10.1466 0.523253L10.1469 1.11475C11.1656 1.18459 12.0116 1.53351 12.6104 2.13355C13.2641 2.79006 13.6081 3.73401 13.6046 4.86633V11.2312C13.6046 13.5558 12.1283 15 9.75275 15H3.85184C1.47627 15 0 13.5356 0 11.1782V4.86493C0 2.67228 1.31654 1.26484 3.46372 1.11499L3.46415 0.523253C3.46415 0.234418 3.69856 0 3.9874 0C4.27624 0 4.51065 0.234418 4.51065 0.523253L4.51044 1.10162H9.09973L9.10007 0.523253C9.10007 0.234418 9.33449 0 9.62333 0ZM12.5581 6.21206H1.04651V11.1782C1.04651 12.9684 2.04278 13.9535 3.85184 13.9535H9.75275C11.5618 13.9535 12.5581 12.9865 12.5581 11.2312L12.5581 6.21206ZM9.90777 10.602C10.1966 10.602 10.431 10.8364 10.431 11.1253C10.431 11.4141 10.1966 11.6485 9.90777 11.6485C9.61893 11.6485 9.38172 11.4141 9.38172 11.1253C9.38172 10.8364 9.61265 10.602 9.90149 10.602H9.90777ZM6.81185 10.602C7.10069 10.602 7.3351 10.8364 7.3351 11.1253C7.3351 11.4141 7.10069 11.6485 6.81185 11.6485C6.52302 11.6485 6.28581 11.4141 6.28581 11.1253C6.28581 10.8364 6.51674 10.602 6.80557 10.602H6.81185ZM3.70945 10.602C3.99828 10.602 4.2327 10.8364 4.2327 11.1253C4.2327 11.4141 3.99828 11.6485 3.70945 11.6485C3.42061 11.6485 3.18271 11.4141 3.18271 11.1253C3.18271 10.8364 3.41433 10.602 3.70317 10.602H3.70945ZM9.90777 7.89038C10.1966 7.89038 10.431 8.1248 10.431 8.41364C10.431 8.70247 10.1966 8.93689 9.90777 8.93689C9.61893 8.93689 9.38172 8.70247 9.38172 8.41364C9.38172 8.1248 9.61265 7.89038 9.90149 7.89038H9.90777ZM6.81185 7.89038C7.10069 7.89038 7.3351 8.1248 7.3351 8.41364C7.3351 8.70247 7.10069 8.93689 6.81185 8.93689C6.52302 8.93689 6.28581 8.70247 6.28581 8.41364C6.28581 8.1248 6.51674 7.89038 6.80557 7.89038H6.81185ZM3.70945 7.89038C3.99828 7.89038 4.2327 8.1248 4.2327 8.41364C4.2327 8.70247 3.99828 8.93689 3.70945 8.93689C3.42061 8.93689 3.18271 8.70247 3.18271 8.41364C3.18271 8.1248 3.41433 7.89038 3.70317 7.89038H3.70945ZM9.09973 2.14813H4.51044L4.51065 2.81929C4.51065 3.10812 4.27624 3.34254 3.9874 3.34254C3.69856 3.34254 3.46415 3.10812 3.46415 2.81929L3.46378 2.16397C1.90083 2.29526 1.04651 3.24268 1.04651 4.86493V5.16556H12.5581L12.5581 4.86493C12.5609 4.00331 12.3292 3.33354 11.8695 2.87308C11.4659 2.4683 10.8759 2.22655 10.1472 2.1643L10.1466 2.81929C10.1466 3.10812 9.91216 3.34254 9.62333 3.34254C9.33449 3.34254 9.10007 3.10812 9.10007 2.81929L9.09973 2.14813Z" fill="white" />
                                                        </svg>
                                                    </div><p className="ms-2 text-xs">27-Jan-2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Reactions></Reactions>

                </div>
                <div className="ms-12">
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
                <div className="ms-6 mt-4">
                    <CommentSection></CommentSection>
                </div>
            </div>
        </div >
    );
};

export default Event;