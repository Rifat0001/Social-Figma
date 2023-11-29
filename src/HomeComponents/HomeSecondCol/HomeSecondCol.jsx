import bg from '../../assets/HomeSecondCol/cover.png'
import profile from '../../assets/HomeSecondCol/profilePic.png'
import Followings from '../../assets/HomeSecondCol/0.png'
import bdp from '../../assets/HomeSecondCol/bdp.png'
import feature from '../../assets/HomeSecondCol/feature.png'
import uparrow from '../../assets/HomeSecondCol/arrow-up.png'
import verify from '../../assets/HomeSecondCol/verify.png'
import m1 from '../../assets/HomeSecondCol/follower1.png'
import m2 from '../../assets/HomeSecondCol/follower2.png'
import m3 from '../../assets/HomeSecondCol/follower3.png'
import m4 from '../../assets/HomeSecondCol/follower4.png'
import pageLike from '../../assets/HomeSecondCol/pageCover.png'
import pageLogo from '../../assets/HomeSecondCol/pageDp.png'
import s1 from '../../assets/HomeSecondCol/groupThumb.png'
import lat1 from '../../assets/HomeSecondCol/latestAct.png'
import lat2 from '../../assets/HomeSecondCol/latestAct2.png'
import lat3 from '../../assets/HomeSecondCol/latestAct3.png'
import lp1 from '../../assets/HomeSecondCol/latestProduct.png'
import lp2 from '../../assets/HomeSecondCol/latestProduct2.png'
import { Link } from 'react-router-dom';
import './HomeSecondCol.css'
const HomeSecondCol = () => {
    return (
        <div className="mt-5 hidden md:block  mb-10">
            {/* background image behind the profile pic  */}
            <div>
                <img src={bg} className="profile-cover" alt="" />
            </div>
            <div className="bg-[#00072D] pb-4 frd-bg">
                {/* 3 parts of image  */}
                <div className="  grid justify-around grid-cols-3">
                    <div className="text-center text-white mt-4">
                        <p className="follower ">123K</p>
                        <p className="text-xs">Followers</p>
                    </div>
                    <div className="text-center relative">
                        <div className="feature-outer relative top-[30px] left-[-10px] z-10 ">
                            <img src={feature} alt="" />
                        </div>

                        <div className="profile-outer relative top-[-15px] ">
                            <img className="profile-img" src={profile} alt="" />
                        </div>
                        {/* tick  */}
                        <div className="verify-svg absolute left-[78px] top-[30px] z-10 ">
                            <img src={verify} alt="" />
                        </div>
                    </div>
                    <div className="text-center text-white mt-4 mx-auto">
                        <div className="flex justify-center">
                            <img src={Followings} alt="" />
                        </div>
                        <p className="text-xs mt-2">Followings</p>
                    </div>
                </div>
                {/* profile name  */}
                <div className="profile-info">
                    <h1 className="text-white text-center font-bold text-xl">
                        <Link to='/profile/timeline'> Oblivion Isme</Link>
                    </h1>
                    <p className="text-xs profile-user text-center mt-2">@oblivion123</p>
                </div>
                {/* friend request  */}
                <div className="mt-6 friend-req mx-auto  ">
                    <div>
                        <p className="text-white text-sm mt-4 text-center ">
                            Friend Requests
                        </p>
                        <div className="profile-top-icon flex justify-center items-center relative top-[-42px] left-[200px] ">
                            <p className="notification-text">99+</p>
                        </div>
                    </div>
                </div>
                {/* friend birthday  */}
                <div className="friend-bd mx-auto mt-6">
                    <div className="mx-5 my-2">
                        <div className="feature-outer absolute top-[480px] left-[165px] z-10 ">
                            <img src={feature} alt="" />
                        </div>
                        <p className="text-sm text-white">Friends birthday</p>
                        <div className="flex justify-center   gap-4 mt-2">
                            <div className="gift">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="37" viewBox="0 0 33 37" fill="none">
                                    <path d="M5.54488 17.6254C7.04638 18.2225 8.56951 18.5168 10.084 18.5124C11.0186 18.5038 11.7802 18.3956 12.4812 18.1663C12.5547 18.1403 12.6326 18.1144 12.7105 18.0841C13.0567 17.9543 13.3726 17.7855 13.6495 17.5908L14.4457 19.711C8.21036 21.8659 2.54622 22.3289 0.0495006 21.0221C-0.253395 19.7154 0.850009 18.0192 2.91402 16.2883C3.6929 16.7859 4.56264 17.2316 5.54488 17.6254Z" fill="url(#paint0_linear_146_27214)" />
                                    <path d="M10.6555 16.1498C10.5171 16.1411 10.3786 16.1281 10.2271 16.1065C9.15835 15.955 8.02899 15.5656 6.78279 14.9295C6.41066 14.7391 6.06017 14.5185 5.72266 14.2848C6.35441 13.8954 7.0251 13.5102 7.73907 13.1338C8.19774 13.8002 8.69536 14.4103 9.23624 14.9468C9.71655 15.4271 10.1839 15.8252 10.6555 16.1498Z" fill="url(#paint1_linear_146_27214)" />
                                    <path d="M29.3572 12.5151C30.3221 15.0854 25.3676 19.3519 18.1371 22.3116L16.9688 19.2134C23.1002 16.7167 27.6696 13.3156 28.6648 10.6804L29.3572 12.5151Z" fill="url(#paint2_linear_146_27214)" />
                                    <path d="M19.4258 10.174C18.9108 11.4721 18.3137 12.5106 17.6041 13.3371C17.4396 13.5274 17.2709 13.6919 17.1064 13.839C17.2665 13.2375 17.3617 12.5885 17.392 11.8702C17.4266 11.1 17.392 10.3124 17.2925 9.51192C18.1536 9.2999 18.9887 9.12682 19.7936 8.99268C19.6984 9.39077 19.5815 9.78453 19.4258 10.174Z" fill="url(#paint3_linear_146_27214)" />
                                    <path d="M30.4562 19.0358L32.7625 25.1586C33.6452 27.4996 29.1494 31.3853 22.5722 34.0984L18.4355 23.1033C23.7059 20.9484 27.7647 18.0969 29.2056 15.7126L30.4562 19.0358Z" fill="url(#paint4_linear_146_27214)" />
                                    <path d="M20.1962 34.9897C13.4632 37.2874 7.52216 37.3263 6.64377 34.9854L4.33744 28.8626L3.08691 25.5394C5.73941 26.3832 10.6723 25.8509 16.0595 23.9946L20.1962 34.9897Z" fill="url(#paint5_linear_146_27214)" />
                                    <path d="M14.5926 20.1047L15.7609 23.2029C8.37028 25.7472 1.83207 25.8035 0.867136 23.2375L0.174805 21.4029C2.65854 22.7269 8.33567 22.2683 14.5926 20.1047Z" fill="url(#paint6_linear_146_27214)" />
                                    <path d="M17.0505 16.4526C17.1284 16.4224 17.2063 16.3921 17.2798 16.3618C17.9548 16.0719 18.5996 15.6521 19.3049 15.0463C20.4516 14.0511 21.3992 12.8266 22.1305 11.4029C22.6151 10.4467 22.9829 9.53365 23.2382 8.6466C25.9296 8.58602 27.8725 9.13556 28.5129 10.3168C27.496 12.9434 22.9353 16.3315 16.8255 18.8195L16.0293 16.7036C16.3582 16.6603 16.7 16.5825 17.0505 16.4526Z" fill="url(#paint7_linear_146_27214)" />
                                    <path d="M14.6356 16.9632L14.6832 16.9458C14.8347 16.8896 14.9861 16.816 15.1289 16.7295L16.0289 19.1224C15.8991 19.1743 15.7693 19.2262 15.6352 19.2781C15.501 19.3301 15.3712 19.3733 15.2371 19.4209L14.3457 17.0454C14.4452 17.0237 14.5447 16.9978 14.6356 16.9632Z" fill="url(#paint8_linear_146_27214)" />
                                    <path d="M16.1805 19.5205L17.3488 22.623C17.219 22.6749 17.0892 22.7269 16.9551 22.7745C16.8209 22.8264 16.6911 22.8697 16.557 22.9216L15.3887 19.8191C15.5228 19.7715 15.6526 19.7282 15.7868 19.6763C15.9209 19.6244 16.0507 19.5724 16.1805 19.5205Z" fill="url(#paint9_linear_146_27214)" />
                                    <path d="M17.6477 23.4148L21.7844 34.4142C21.6546 34.4661 21.5248 34.5181 21.3907 34.5657C21.2565 34.6133 21.1267 34.6609 20.9926 34.7128L16.8516 23.7134C16.9857 23.6658 17.1155 23.6225 17.2497 23.5706C17.3838 23.5186 17.5136 23.4624 17.6477 23.4148Z" fill="url(#paint10_linear_146_27214)" />
                                    <path d="M0.590371 12.7271C0.975481 13.5016 1.50771 14.0945 2.07456 14.6094C3.22556 15.6133 4.53666 16.3099 5.86075 16.8378L5.8694 16.8421C7.21079 17.3744 8.64305 17.6729 10.084 17.6643C10.8023 17.6556 11.5249 17.5864 12.2215 17.3571C12.8014 17.171 13.4028 16.8378 13.7793 16.2969C13.9697 16.2753 14.1601 16.2364 14.3461 16.1671C14.5928 16.0806 14.8178 15.9508 15.0168 15.795C15.6702 15.9811 16.3712 15.8296 16.9467 15.5786C17.6174 15.2887 18.2102 14.8647 18.7554 14.3974C19.8415 13.454 20.7199 12.2901 21.3776 11.0093L21.3863 10.9919C22.031 9.71978 22.5589 8.33079 22.7623 6.81632C22.8488 6.05908 22.8575 5.2629 22.6368 4.42345C22.5157 4.00805 22.3556 3.57967 22.0613 3.17725C21.7757 2.77483 21.3603 2.40703 20.8627 2.18202L20.694 2.11712C20.668 2.10846 20.5858 2.07817 20.5079 2.05654C20.3435 2.00461 20.2223 1.9873 20.0882 1.96999C19.8285 1.93971 19.5689 1.93538 19.3266 1.96567C18.8376 2.02192 18.4093 2.17769 18.0242 2.35943C17.2539 2.74021 16.6655 3.27244 16.1419 3.82198C15.7741 4.22873 15.4582 4.66576 15.1683 5.11145C14.7356 4.15949 14.199 3.24215 13.5197 2.39405C12.9571 1.72335 12.3167 1.08294 11.4773 0.593985C11.0576 0.355996 10.5859 0.152623 10.045 0.0574278C9.5128 -0.0420949 8.89835 -0.0204595 8.33151 0.18724C7.76899 0.39494 7.28003 0.775722 6.93386 1.19978C6.58337 1.62816 6.36269 2.09548 6.19826 2.55415C5.88238 3.48014 5.82613 4.38883 5.86507 5.26722C5.91267 6.14562 6.06412 6.9894 6.28047 7.81154C6.31509 7.95434 6.35836 8.09713 6.3973 8.23992C5.9646 8.13175 5.53189 8.04088 5.07755 7.98895C4.32031 7.91972 3.52845 7.91107 2.69766 8.13175C2.28658 8.24858 1.86253 8.41301 1.45579 8.69427C1.25241 8.82841 1.06202 9.00149 0.884612 9.19621C0.798071 9.29573 0.720183 9.39093 0.629315 9.53805C0.586044 9.60295 0.538446 9.68084 0.529792 9.7068L0.443251 9.8669C0.218243 10.3645 0.14901 10.9141 0.200935 11.403C0.248532 11.9093 0.408634 12.3377 0.590371 12.7271ZM13.4937 15.8426C13.0091 15.8426 12.5071 15.6782 12.0701 15.4185C11.4124 15.0334 10.8542 14.4796 10.3782 13.8738C9.59068 12.8396 8.98922 11.667 8.53921 10.4511C8.60411 10.4727 8.66902 10.49 8.73392 10.516C9.95849 10.979 11.1441 11.6237 12.1307 12.5021C12.611 12.9478 13.0523 13.4497 13.3423 14.0209C13.3725 14.0815 13.3985 14.1421 13.4245 14.2026C13.4331 14.2286 13.4461 14.2546 13.4591 14.2848C13.6538 14.7868 13.723 15.3277 13.5197 15.7993C13.511 15.8166 13.5024 15.8296 13.4937 15.8426ZM14.3115 6.64323C14.1601 6.96344 14.0216 7.28797 13.8961 7.6125C13.3812 8.96254 13.074 10.3818 13.0523 11.8271C13.048 12.0348 13.0567 12.2425 13.0653 12.4502C12.9355 12.2857 12.8057 12.1256 12.6672 11.9699C11.7023 10.9011 10.534 10.0313 9.2575 9.35631C8.85941 9.14861 8.44401 8.96255 8.02428 8.78946C7.74302 7.62115 7.61321 6.43121 7.69975 5.28453C7.75168 4.56191 7.88149 3.8566 8.11948 3.26812C8.35747 2.67531 8.69498 2.26856 9.06278 2.13442C9.42193 1.96999 9.96714 2.0349 10.5383 2.33347C11.1095 2.61906 11.6763 3.06907 12.1783 3.59265C13.0221 4.46239 13.736 5.51387 14.3115 6.64323ZM14.874 15.2281C14.45 14.9945 14.1601 14.5661 13.987 14.0858C13.9783 14.0598 13.9697 14.0296 13.961 14.0036C13.9394 13.943 13.9221 13.8781 13.9048 13.8132C13.7403 13.1944 13.749 12.5237 13.8139 11.8747C13.974 10.5982 14.424 9.36929 15.0168 8.2356C15.4452 9.3866 15.7351 10.6025 15.7957 11.8314C15.8173 12.6016 15.7654 13.3805 15.5231 14.0945C15.3803 14.5142 15.164 14.9166 14.874 15.2281ZM15.4322 15.3969C15.7135 15.068 15.9255 14.6829 16.0726 14.2978C16.3842 13.506 16.5183 12.6665 16.5529 11.8357C16.6308 10.1698 16.3582 8.50388 15.8563 6.91151C15.852 6.90286 15.8476 6.88988 15.8476 6.88122C16.3106 6.22351 16.8342 5.61772 17.4054 5.10712C17.864 4.69605 18.366 4.35421 18.8506 4.15949C19.3396 3.95179 19.768 3.94314 20.006 4.08161C20.2569 4.19411 20.5036 4.51864 20.6723 5.01625C20.8411 5.50521 20.9146 6.10668 20.9276 6.71679C20.9449 7.95434 20.6983 9.25246 20.2136 10.49V10.4943C19.7333 11.7102 19.1102 12.8915 18.2492 13.8954C17.8121 14.3887 17.3102 14.8344 16.7304 15.1243C16.3236 15.3277 15.8606 15.4445 15.4322 15.3969ZM2.44669 11.8703C2.24331 11.3857 2.21735 10.979 2.33418 10.7323C2.42505 10.4684 2.74958 10.1914 3.25585 10.027C3.74914 9.85825 4.35493 9.78036 4.96937 9.78902C5.64439 9.78902 6.33672 9.87556 7.02473 10.0227C7.05069 10.0833 7.07233 10.1438 7.09829 10.2001V10.2044C7.76466 11.7319 8.65604 13.1728 9.83733 14.3498C10.4258 14.9382 11.0749 15.4748 11.8235 15.8642C12.2259 16.0719 12.6889 16.2364 13.1605 16.2926C12.8706 16.5695 12.4812 16.7643 12.0744 16.8681C11.447 17.0325 10.7763 17.0282 10.1229 16.9417C8.81181 16.7513 7.55696 16.271 6.39298 15.6738L6.40163 15.6782C5.22034 15.0724 4.17752 14.2546 3.37701 13.3113C2.98324 12.8483 2.64573 12.3506 2.44669 11.8703Z" fill="url(#paint11_linear_146_27214)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_146_27214" x1="0.651455" y1="16.2883" x2="3.48422" y2="25.1215" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_146_27214" x1="5.94511" y1="13.1338" x2="8.14372" y2="17.3731" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_146_27214" x1="17.5328" y1="10.6804" x2="27.6207" y2="23.47" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_146_27214" x1="17.2276" y1="8.99268" x2="21.1865" y2="11.5804" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint4_linear_146_27214" x1="19.0866" y1="15.7126" x2="35.4352" y2="30.8471" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint5_linear_146_27214" x1="3.85849" y1="23.9946" x2="14.1098" y2="40.2342" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint6_linear_146_27214" x1="0.87769" y1="20.1047" x2="3.16423" y2="28.4541" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint7_linear_146_27214" x1="16.5923" y1="8.64209" x2="25.0848" y2="20.9225" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint8_linear_146_27214" x1="14.4216" y1="16.7295" x2="16.7146" y2="18.4201" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint9_linear_146_27214" x1="15.4771" y1="19.5205" x2="18.2971" y2="21.4365" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint10_linear_146_27214" x1="17.074" y1="23.4148" x2="25.2742" y2="27.6356" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                        <linearGradient id="paint11_linear_146_27214" x1="1.20532" y1="5.09974e-07" x2="15.7079" y2="21.9074" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00E7FC" />
                                            <stop offset="1" stop-color="#EC46E5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <img src={bdp} className="bd-img" alt="" />
                            </div>

                            <div className="space-y-1 bd-info mb-4 ">
                                <p className="text-sm text-white leading-3 mb-[-8px]">
                                    Kevin Alexander
                                </p>
                                <div className="leading-3 flex items-center justify-center">
                                    <p className="text-xs profile-user  mt-2 leading-3">
                                        @kevinalexander123
                                    </p>
                                    {/* <img
                                        src={tick}
                                        className="w-[12px] h-[12px] mt-2 ms-1"
                                        alt=""
                                    /> */}
                                </div>

                                <p className="text-xs text-white leading-3 font-thin">
                                    19 years old
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* trending */}
            <div className="trend w-[320px] mx-auto mt-6 ">
                <div className="mx-5 my-3">
                    <p className="text-sm text-white">Trending</p>
                    <div className="mt-2 flex items-center navborder pb-3">
                        <img src={uparrow} alt="" />
                        <p className="text-xs ms-2 text-white leading-3 font-thin">
                            #FineArt Co
                        </p>
                    </div>
                    <div className="mt-2 flex items-center ">
                        <img src={uparrow} alt="" />
                        <p className="text-xs ms-2 text-white leading-3 font-thin">
                            #Friends Status
                        </p>
                    </div>
                </div>
            </div>

            {/* People You May Know */}
            <div className="may-know w-[320px]  mx-auto mt-6 ">
                <div className="mx-5 my-3">
                    <div className="mt-2 flex justify-between mb-3  navborder pb-3">
                        <p className="text-sm text-white font-medium">
                            People You May Know
                        </p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM15.7692 8.75721C15.7692 8.86712 15.7256 8.97253 15.6478 9.05025C15.5701 9.12797 15.4647 9.17163 15.3548 9.17163H12.4923C12.4103 9.17177 12.3301 9.14754 12.2619 9.10204C12.1937 9.05653 12.1406 8.99179 12.1092 8.91603C12.0778 8.84027 12.0697 8.75691 12.0857 8.67651C12.1018 8.5961 12.1414 8.52229 12.1995 8.46442L13.2654 7.39856L12.9962 7.08558C12.5146 6.58563 11.9166 6.21281 11.2557 6.00045C10.5949 5.78809 9.89165 5.7428 9.20899 5.86865C8.52633 5.99449 7.88549 6.28753 7.34377 6.72158C6.80205 7.15563 6.37632 7.71715 6.10466 8.35595C5.833 8.99475 5.72387 9.69091 5.78702 10.3822C5.85017 11.0735 6.08364 11.7383 6.46656 12.3173C6.84947 12.8963 7.36989 13.3714 7.9813 13.7001C8.5927 14.0288 9.27603 14.2009 9.97019 14.201C10.8389 14.2002 11.6861 13.9306 12.3956 13.4292C13.105 12.9278 13.642 12.2191 13.9327 11.4005C13.9664 11.3051 14.0185 11.2174 14.0861 11.1422C14.1537 11.067 14.2355 11.0059 14.3267 10.9623C14.4179 10.9187 14.5168 10.8935 14.6178 10.8881C14.7188 10.8828 14.8198 10.8973 14.9151 10.931C15.0105 10.9647 15.0982 11.0168 15.1734 11.0844C15.2486 11.152 15.3098 11.2338 15.3534 11.325C15.3969 11.4162 15.4221 11.5152 15.4275 11.6161C15.4329 11.7171 15.4183 11.8181 15.3846 11.9135C15.034 12.9057 14.4174 13.7825 13.6021 14.4479C12.7869 15.1134 11.8044 15.5419 10.7621 15.6867C9.71974 15.8315 8.65765 15.687 7.69189 15.269C6.72612 14.851 5.89386 14.1755 5.28606 13.3164C4.67825 12.4573 4.3183 11.4477 4.24554 10.3978C4.17278 9.34801 4.39001 8.29838 4.8735 7.36366C5.35698 6.42894 6.08811 5.64512 6.98697 5.09785C7.88583 4.55059 8.91784 4.26094 9.97019 4.26058C10.7469 4.25761 11.5159 4.41369 12.23 4.71921C12.944 5.02472 13.588 5.4732 14.1221 6.03702L14.149 6.06683L14.3562 6.30721L15.062 5.60144C15.0996 5.56299 15.1445 5.53239 15.194 5.51143C15.2435 5.49046 15.2967 5.47955 15.3505 5.47933C15.4052 5.47888 15.4595 5.48929 15.5101 5.50996C15.5608 5.53062 15.6069 5.56113 15.6457 5.59971C15.6845 5.63829 15.7153 5.68419 15.7362 5.73475C15.7572 5.7853 15.7679 5.83951 15.7678 5.89423L15.7692 8.75721Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                        {/* each profiles  */}
                        <div className="each-may-know text-center p-2  ">
                            <div className="flex items-center justify-center">
                                <img src={m1} className="follower-img" alt="" />
                            </div>
                            <h1 className="text-sm text-white font-medium">Sophia jain</h1>
                            <p className="profile-user text-xs mb-2">@sophia1</p>
                            <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                                FOLLOW
                            </button>
                        </div>
                        {/* each profiles  */}
                        <div className="each-may-know text-center  p-2 ">
                            <div>
                                <div className="flex items-center justify-center">
                                    <img src={m2} className="follower-img" alt="" />
                                </div>
                                <img src={feature} className="may-tik w-[14px]" alt="" />
                            </div>
                            <div className="may-tik-below">
                                <h1 className="text-sm text-white font-medium">Sophia jain</h1>
                                <div className="leading-3 flex justify-center">
                                    <p className="profile-user text-xs mb-2">@sophia1</p>
                                    <img
                                        src={verify}
                                        className="w-[12px] h-[12px] mt-1 ms-1"
                                        alt=""
                                    />
                                </div>
                                <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                                    FOLLOW
                                </button>
                            </div>
                        </div>
                        {/* each profiles  */}
                        <div className="each-may-know text-center p-2 ">
                            <div className="flex items-center justify-center">
                                <img src={m3} className="follower-img" alt="" />
                            </div>
                            <h1 className="text-sm text-white font-medium">Sophia jain</h1>
                            <p className="profile-user text-xs mb-2">@sophia1</p>
                            <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                                FOLLOW
                            </button>
                        </div>
                        {/* each profiles  */}
                        <div className="each-may-know text-center p-2">
                            <div className="flex items-center justify-center">
                                <img src={m4} className="follower-img" alt="" />
                            </div>
                            <h1 className="text-sm text-white font-medium">Sophia jain</h1>
                            <p className="profile-user text-xs mb-2">@sophia1</p>
                            <button className="btn btn-xs font-bold border-0 py-2 follow-btn">
                                FOLLOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pages You May Know */}
            <div className="may-like w-[320px] mx-auto mt-6 ">
                <div className="mx-5 my-3">
                    <div className="mt-2 flex justify-between mb-3   pb-3">
                        <p className="text-sm text-white font-medium">Pages You May Like</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM15.7692 8.75721C15.7692 8.86712 15.7256 8.97253 15.6478 9.05025C15.5701 9.12797 15.4647 9.17163 15.3548 9.17163H12.4923C12.4103 9.17177 12.3301 9.14754 12.2619 9.10204C12.1937 9.05653 12.1406 8.99179 12.1092 8.91603C12.0778 8.84027 12.0697 8.75691 12.0857 8.67651C12.1018 8.5961 12.1414 8.52229 12.1995 8.46442L13.2654 7.39856L12.9962 7.08558C12.5146 6.58563 11.9166 6.21281 11.2557 6.00045C10.5949 5.78809 9.89165 5.7428 9.20899 5.86865C8.52633 5.99449 7.88549 6.28753 7.34377 6.72158C6.80205 7.15563 6.37632 7.71715 6.10466 8.35595C5.833 8.99475 5.72387 9.69091 5.78702 10.3822C5.85017 11.0735 6.08364 11.7383 6.46656 12.3173C6.84947 12.8963 7.36989 13.3714 7.9813 13.7001C8.5927 14.0288 9.27603 14.2009 9.97019 14.201C10.8389 14.2002 11.6861 13.9306 12.3956 13.4292C13.105 12.9278 13.642 12.2191 13.9327 11.4005C13.9664 11.3051 14.0185 11.2174 14.0861 11.1422C14.1537 11.067 14.2355 11.0059 14.3267 10.9623C14.4179 10.9187 14.5168 10.8935 14.6178 10.8881C14.7188 10.8828 14.8198 10.8973 14.9151 10.931C15.0105 10.9647 15.0982 11.0168 15.1734 11.0844C15.2486 11.152 15.3098 11.2338 15.3534 11.325C15.3969 11.4162 15.4221 11.5152 15.4275 11.6161C15.4329 11.7171 15.4183 11.8181 15.3846 11.9135C15.034 12.9057 14.4174 13.7825 13.6021 14.4479C12.7869 15.1134 11.8044 15.5419 10.7621 15.6867C9.71974 15.8315 8.65765 15.687 7.69189 15.269C6.72612 14.851 5.89386 14.1755 5.28606 13.3164C4.67825 12.4573 4.3183 11.4477 4.24554 10.3978C4.17278 9.34801 4.39001 8.29838 4.8735 7.36366C5.35698 6.42894 6.08811 5.64512 6.98697 5.09785C7.88583 4.55059 8.91784 4.26094 9.97019 4.26058C10.7469 4.25761 11.5159 4.41369 12.23 4.71921C12.944 5.02472 13.588 5.4732 14.1221 6.03702L14.149 6.06683L14.3562 6.30721L15.062 5.60144C15.0996 5.56299 15.1445 5.53239 15.194 5.51143C15.2435 5.49046 15.2967 5.47955 15.3505 5.47933C15.4052 5.47888 15.4595 5.48929 15.5101 5.50996C15.5608 5.53062 15.6069 5.56113 15.6457 5.59971C15.6845 5.63829 15.7153 5.68419 15.7362 5.73475C15.7572 5.7853 15.7679 5.83951 15.7678 5.89423L15.7692 8.75721Z" fill="white" />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <img className="page-cover" src={pageLike} alt="" />
                        {/* <div className="page-cover"></div> */}
                        <div className=" page-info px-2">
                            <div
                                className="flex mt-2
                              "
                            >
                                <img src={pageLogo} className='page-dp' alt="" />
                                <div className="ms-4">
                                    <p className="text-white text-sm font-medium ">graphics</p>
                                </div>
                            </div>
                            <div className="text-[#CECECE] text-xs ms-10">
                                <p>other </p>
                                <p>30 people like this</p>
                            </div>
                            <button className="btn btn-sm mt-3 like-btn">
                                <div className="flex justify-center items-center gap-2">
                                    <div className="like">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                            <path d="M16.4454 9.36979C16.8024 8.89029 17 8.30279 17 7.69153C17 6.72172 16.4666 5.80375 15.6081 5.29184C15.3871 5.16008 15.1355 5.09073 14.8793 5.09097H9.7835L9.911 2.43642C9.94075 1.79492 9.71763 1.18582 9.28413 0.721433C9.07138 0.492541 8.81472 0.310426 8.53 0.186343C8.24527 0.0622597 7.93854 -0.00115559 7.62875 1.59406e-05C6.52375 1.59406e-05 5.54625 0.755992 5.253 1.83812L3.42762 8.5555H0.68C0.303875 8.5555 0 8.86437 0 9.24668V17.1088C0 17.4911 0.303875 17.8 0.68 17.8H13.4576C13.6531 17.8 13.8444 17.7611 14.0208 17.6834C15.0322 17.2449 15.6846 16.2405 15.6846 15.126C15.6846 14.8539 15.6464 14.586 15.5699 14.3268C15.9269 13.8473 16.1245 13.2598 16.1245 12.6486C16.1245 12.3764 16.0863 12.1086 16.0098 11.8494C16.3668 11.3699 16.5644 10.7824 16.5644 10.1711C16.5601 9.89898 16.5219 9.62898 16.4454 9.36979ZM1.53 16.2448V10.1106H3.25125V16.2448H1.53ZM15.0535 8.6203L14.5881 9.03068L14.8835 9.57931C14.9808 9.76003 15.0313 9.96295 15.0301 10.169C15.0301 10.5254 14.8771 10.8645 14.6136 11.0977L14.1482 11.5081L14.4436 12.0567C14.5409 12.2375 14.5914 12.4404 14.5903 12.6464C14.5903 13.0028 14.4373 13.3419 14.1737 13.5752L13.7084 13.9856L14.0037 14.5342C14.1011 14.7149 14.1515 14.9178 14.1504 15.1238C14.1504 15.6077 13.8699 16.044 13.4364 16.2427H4.61125V10.0415L6.72563 2.25498C6.78015 2.05541 6.89718 1.87933 7.059 1.75344C7.22082 1.62755 7.4186 1.5587 7.62238 1.55733C7.78388 1.55733 7.94325 1.60484 8.07075 1.70204C8.28113 1.86188 8.39375 2.10379 8.381 2.36082L8.177 6.64612H14.858C15.2363 6.88155 15.47 7.27898 15.47 7.69153C15.47 8.04792 15.317 8.38486 15.0535 8.6203Z" fill="#00072D" />
                                        </svg>
                                    </div>
                                    <p>Like</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Suggested groups */}
            <div className="may-like w-[320px] mx-auto mt-6 ">
                <div className="mx-5 my-3">
                    <div className="mt-2 flex justify-between mb-3  navborder pb-3">
                        <p className="text-sm text-white font-medium">Suggested Groups</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM15.7692 8.75721C15.7692 8.86712 15.7256 8.97253 15.6478 9.05025C15.5701 9.12797 15.4647 9.17163 15.3548 9.17163H12.4923C12.4103 9.17177 12.3301 9.14754 12.2619 9.10204C12.1937 9.05653 12.1406 8.99179 12.1092 8.91603C12.0778 8.84027 12.0697 8.75691 12.0857 8.67651C12.1018 8.5961 12.1414 8.52229 12.1995 8.46442L13.2654 7.39856L12.9962 7.08558C12.5146 6.58563 11.9166 6.21281 11.2557 6.00045C10.5949 5.78809 9.89165 5.7428 9.20899 5.86865C8.52633 5.99449 7.88549 6.28753 7.34377 6.72158C6.80205 7.15563 6.37632 7.71715 6.10466 8.35595C5.833 8.99475 5.72387 9.69091 5.78702 10.3822C5.85017 11.0735 6.08364 11.7383 6.46656 12.3173C6.84947 12.8963 7.36989 13.3714 7.9813 13.7001C8.5927 14.0288 9.27603 14.2009 9.97019 14.201C10.8389 14.2002 11.6861 13.9306 12.3956 13.4292C13.105 12.9278 13.642 12.2191 13.9327 11.4005C13.9664 11.3051 14.0185 11.2174 14.0861 11.1422C14.1537 11.067 14.2355 11.0059 14.3267 10.9623C14.4179 10.9187 14.5168 10.8935 14.6178 10.8881C14.7188 10.8828 14.8198 10.8973 14.9151 10.931C15.0105 10.9647 15.0982 11.0168 15.1734 11.0844C15.2486 11.152 15.3098 11.2338 15.3534 11.325C15.3969 11.4162 15.4221 11.5152 15.4275 11.6161C15.4329 11.7171 15.4183 11.8181 15.3846 11.9135C15.034 12.9057 14.4174 13.7825 13.6021 14.4479C12.7869 15.1134 11.8044 15.5419 10.7621 15.6867C9.71974 15.8315 8.65765 15.687 7.69189 15.269C6.72612 14.851 5.89386 14.1755 5.28606 13.3164C4.67825 12.4573 4.3183 11.4477 4.24554 10.3978C4.17278 9.34801 4.39001 8.29838 4.8735 7.36366C5.35698 6.42894 6.08811 5.64512 6.98697 5.09785C7.88583 4.55059 8.91784 4.26094 9.97019 4.26058C10.7469 4.25761 11.5159 4.41369 12.23 4.71921C12.944 5.02472 13.588 5.4732 14.1221 6.03702L14.149 6.06683L14.3562 6.30721L15.062 5.60144C15.0996 5.56299 15.1445 5.53239 15.194 5.51143C15.2435 5.49046 15.2967 5.47955 15.3505 5.47933C15.4052 5.47888 15.4595 5.48929 15.5101 5.50996C15.5608 5.53062 15.6069 5.56113 15.6457 5.59971C15.6845 5.63829 15.7153 5.68419 15.7362 5.73475C15.7572 5.7853 15.7679 5.83951 15.7678 5.89423L15.7692 8.75721Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    {/* Group Information */}
                    <div className="flex items-center justify-between gap-2 w-full">
                        <div className="w-1/2 border-[1px] rounded-xl each-suggestion p-2">
                            <img src={s1} className='group-thumb' alt="" />
                            <div className="text-white text-center">
                                <h2 className="font-bold ">All stars</h2>
                                <p className="text-sm">119 members</p>
                                <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
                                    Join
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2 border-[1px] rounded-xl each-suggestion p-2">
                            <img src={s1} className='group-thumb' alt="" />
                            <div className="text-white text-center">
                                <h2 className="font-bold ">Chosen Ones</h2>
                                <p className="text-sm">106 members</p>
                                <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
                                    Join
                                </button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* Online User */}
            <div className="trend my-7">
                <div className="flex items-center justify-center py-3 gap-2">
                    <div className="user">
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="35" viewBox="0 0 49 35" fill="none">
                            <path d="M24.5 0C22.6048 0 20.7872 0.913181 19.4471 2.53865C18.107 4.16412 17.3542 6.36874 17.3542 8.6675C17.3542 10.9663 18.107 13.1709 19.4471 14.7963C20.7872 16.4218 22.6048 17.335 24.5 17.335C26.3952 17.335 28.2128 16.4218 29.5529 14.7963C30.893 13.1709 31.6458 10.9663 31.6458 8.6675C31.6458 6.36874 30.893 4.16412 29.5529 2.53865C28.2128 0.913181 26.3952 0 24.5 0ZM24.5 4.95286C25.3122 4.95286 26.0912 5.34422 26.6655 6.04085C27.2398 6.73748 27.5625 7.68232 27.5625 8.6675C27.5625 9.65268 27.2398 10.5975 26.6655 11.2941C26.0912 11.9908 25.3122 12.3821 24.5 12.3821C23.6878 12.3821 22.9088 11.9908 22.3345 11.2941C21.7602 10.5975 21.4375 9.65268 21.4375 8.6675C21.4375 7.68232 21.7602 6.73748 22.3345 6.04085C22.9088 5.34422 23.6878 4.95286 24.5 4.95286ZM11.2292 7.42929C9.87546 7.42929 8.57719 8.08156 7.61998 9.24261C6.66276 10.4037 6.125 11.9784 6.125 13.6204C6.125 15.9482 7.20708 17.9541 8.75875 19.019C9.49375 19.5143 10.3308 19.8114 11.2292 19.8114C12.1275 19.8114 12.9646 19.5143 13.6996 19.019C14.455 18.4989 15.0879 17.756 15.5575 16.8645C14.0701 14.5133 13.2661 11.6311 13.2708 8.6675V7.9741C12.6583 7.6274 11.9642 7.42929 11.2292 7.42929ZM37.7708 7.42929C37.0358 7.42929 36.3417 7.6274 35.7292 7.9741V8.6675C35.7292 11.6392 34.9329 14.5119 33.4425 16.8645C33.6875 17.335 33.9529 17.7065 34.2592 18.0779C35.2007 19.1851 36.4594 19.8065 37.7708 19.8114C38.6692 19.8114 39.5062 19.5143 40.2412 19.019C41.7929 17.9541 42.875 15.9482 42.875 13.6204C42.875 11.9784 42.3372 10.4037 41.38 9.24261C40.4228 8.08156 39.1245 7.42929 37.7708 7.42929ZM24.5 22.2879C19.7225 22.2879 10.2083 25.1853 10.2083 30.9554V34.67H38.7917V30.9554C38.7917 25.1853 29.2775 22.2879 24.5 22.2879ZM9.61625 23.6499C5.67583 24.2195 0 26.6464 0 30.9554V34.67H6.125V29.8905C6.125 27.3893 7.53375 25.3091 9.61625 23.6499ZM39.3838 23.6499C41.4663 25.3091 42.875 27.3893 42.875 29.8905V34.67H49V30.9554C49 26.6464 43.3242 24.2195 39.3838 23.6499ZM24.5 27.2407C27.6238 27.2407 31.115 28.4789 33.1362 29.7171H15.8638C17.885 28.4789 21.3763 27.2407 24.5 27.2407Z" fill="url(#paint0_linear_146_26652)" />
                            <defs>
                                <linearGradient id="paint0_linear_146_26652" x1="2.20975" y1="1.00092e-06" x2="29.4963" y2="45.4638" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00E7FC" />
                                    <stop offset="1" stop-color="#EC46E5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="profile-user">(2k)</h2>
                    <p className="profile-user">Online Users</p>
                </div>
            </div>
            {/* Latest Activities */}
            <div className=" bg-[#00072D] rounded-3xl">
                <div className=" py-6 pl-4">
                    <p className="font-bold navborder pb-3 text-white">
                        Latest Activities
                    </p>
                    {/* first card */}
                    <div className="mt-2 flex items-center navborder pb-3 text-white gap-4 py-4">
                        <img
                            src={lat1}
                            alt=""
                            className=" rounded-xl border-[1px] border-[#8F8F8F] latest-act "
                        />
                        <div className="flex items-start justify-normal gap-2">
                            <div>
                                <p className="text-[12px] font-bold">
                                    {"Comment on @aqxa's post"}
                                </p>
                                <div className="flex items-center gap-1">
                                    <span className="text-[#B6B6B6] text-[10px]">
                                        Thanks its literally lite
                                    </span>
                                    <div className="fire">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                            <path d="M1.81856 3.5873C1.76289 4.18109 1.72382 5.23193 2.07443 5.67922C2.07443 5.67922 1.90938 4.52486 3.38896 3.07653C3.9847 2.49349 4.1224 1.70048 3.91438 1.10571C3.79621 0.76878 3.58038 0.490444 3.39287 0.296097C3.28348 0.181832 3.36747 -0.00665541 3.52666 0.000180925C4.48961 0.0431522 6.05025 0.310746 6.71337 1.97491C7.0044 2.70542 7.02589 3.46034 6.88721 4.22797C6.79931 4.71823 6.4868 5.80814 7.19973 5.94193C7.70855 6.03764 7.95465 5.63332 8.06501 5.34229C8.11091 5.22119 8.2701 5.19091 8.35605 5.2876C9.21547 6.26519 9.28872 7.41663 9.11097 8.4079C8.7672 10.324 6.82666 11.7186 4.89881 11.7186C2.49047 11.7186 0.573365 10.3406 0.0762658 7.84634C-0.123941 6.83945 -0.0223726 4.84714 1.53045 3.44081C1.64569 3.33534 1.83418 3.42909 1.81856 3.5873Z" fill="url(#paint0_radial_146_26546)" />
                                            <path d="M5.77883 7.17051C4.89109 6.02787 5.28857 4.72408 5.50636 4.20452C5.53566 4.13616 5.45753 4.0717 5.396 4.11369C5.01414 4.37347 4.23187 4.98484 3.86759 5.84524C3.3744 7.00839 3.40955 7.57776 3.70156 8.27312C3.87736 8.69209 3.67324 8.78096 3.5707 8.79658C3.47108 8.81221 3.37928 8.7458 3.30603 8.67646C3.09532 8.47416 2.94516 8.21713 2.87241 7.93423C2.85679 7.87368 2.77768 7.85708 2.74155 7.90688C2.46809 8.28484 2.32648 8.89132 2.31965 9.32005C2.29816 10.6453 3.39295 11.7196 4.71725 11.7196C6.38629 11.7196 7.60218 9.8738 6.64314 8.33074C6.36481 7.88149 6.10307 7.58753 5.77883 7.17051Z" fill="url(#paint1_radial_146_26546)" />
                                            <defs>
                                                <radialGradient id="paint0_radial_146_26546" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.42181 11.749) rotate(-179.751) scale(6.89373 11.3112)">
                                                    <stop offset="0.314" stop-color="#FF9800" />
                                                    <stop offset="0.662" stop-color="#FF6D00" />
                                                    <stop offset="0.972" stop-color="#F44336" />
                                                </radialGradient>
                                                <radialGradient id="paint1_radial_146_26546" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.80905 4.88897) rotate(90.5787) scale(7.21296 5.42829)">
                                                    <stop offset="0.214" stop-color="#FFF176" />
                                                    <stop offset="0.328" stop-color="#FFF27D" />
                                                    <stop offset="0.487" stop-color="#FFF48F" />
                                                    <stop offset="0.672" stop-color="#FFF7AD" />
                                                    <stop offset="0.793" stop-color="#FFF9C4" />
                                                    <stop offset="0.822" stop-color="#FFF8BD" stop-opacity="0.804" />
                                                    <stop offset="0.863" stop-color="#FFF6AB" stop-opacity="0.529" />
                                                    <stop offset="0.91" stop-color="#FFF38D" stop-opacity="0.209" />
                                                    <stop offset="0.941" stop-color="#FFF176" stop-opacity="0" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="love">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                            <path d="M8.42758 4.66342C8.1678 3.16626 7.53495 2.70335 6.97633 2.29512C6.59252 2.01483 6.26047 1.77263 6.09346 1.24135C5.91474 0.674907 6.36692 0.0850289 6.3718 0.0791692C6.3845 0.0635432 6.38547 0.041081 6.37473 0.0235019C6.36971 0.0148892 6.36209 0.00808134 6.35297 0.00404816C6.34386 1.49759e-05 6.3337 -0.00103787 6.32395 0.0010396C6.28586 0.00787594 6.23703 0.0147123 6.17941 0.0215486C5.58367 0.100655 4.00252 0.308675 3.58648 2.42892C3.53179 2.70823 3.36284 2.9348 3.18607 2.96703C3.07278 2.98754 2.96633 2.92504 2.88039 2.78538C2.53857 2.23066 3.25638 1.29604 3.2642 1.28627C3.27689 1.27065 3.27787 1.24818 3.26713 1.2306C3.26197 1.22212 3.25433 1.21543 3.24526 1.21141C3.23618 1.2074 3.22609 1.20626 3.21634 1.20814C3.19583 1.21205 1.19474 1.62906 0.382193 3.67508C0.135109 4.29719 -0.557315 6.47212 0.897848 8.33942C2.35692 10.2116 3.24271 10.3395 3.26224 10.3503C3.26908 10.3552 8.93152 8.31012 8.42758 4.66342Z" fill="url(#paint0_radial_146_26538)" />
                                            <path opacity="0.8" d="M5.60391 3.28339C5.21619 2.52944 4.58725 0.948293 6.24359 0.0839844C4.9984 0.30763 4.08331 1.19342 4.15753 2.68863C4.20539 3.66329 4.75327 4.53249 5.00817 5.47395C5.35096 6.74648 5.09216 7.54145 4.94273 8.14207C7.06786 6.74746 6.101 4.24829 5.60391 3.28339Z" fill="url(#paint1_linear_146_26538)" />
                                            <path d="M7.22155 3.6936C5.59547 3.6936 4.99876 5.35483 4.99876 5.35483C4.99876 5.35483 4.571 3.6936 2.77207 3.6936C1.54153 3.6936 0.139101 4.66827 0.657686 6.8852C1.17627 9.10115 5.00267 11.863 5.00267 11.863C5.00267 11.863 8.81637 9.10212 9.33495 6.88617C9.85353 4.66827 8.55072 3.6936 7.22155 3.6936Z" fill="url(#paint2_radial_146_26538)" />
                                            <path d="M1.51196 4.8704C1.79029 4.52272 2.28739 4.23657 2.70831 4.56667C2.93587 4.74539 2.83625 5.1126 2.63312 5.2669C2.33622 5.4925 2.07742 5.62825 1.89772 5.98179C1.78932 6.19469 1.72388 6.42615 1.69068 6.66347C1.67798 6.75722 1.55493 6.77969 1.50903 6.69765C1.19455 6.14098 1.10568 5.37726 1.51196 4.8704ZM5.97315 5.59993C5.84229 5.59993 5.75048 5.47395 5.79834 5.35187C5.88721 5.12822 6.0005 4.91044 6.1382 4.71804C6.34134 4.43287 6.72808 4.26684 6.97321 4.43971C7.2242 4.61647 7.19197 4.97001 7.01521 5.13994C6.63628 5.50617 6.16066 5.59993 5.97315 5.59993Z" fill="#FF7043" />
                                            <path d="M4.80386 11.7146C3.62215 11.5573 3.06548 11.2302 2.65627 10.3766C2.44728 9.94007 2.4463 9.19393 2.43849 8.73199C2.4297 8.22024 2.27539 7.77783 2.27539 7.77783C2.584 7.83252 3.14361 8.37455 3.40143 9.37656C3.8497 11.1159 4.80386 11.7146 4.80386 11.7146Z" fill="url(#paint3_linear_146_26538)" />
                                            <path d="M8.93135 7.77796C8.93135 7.77796 9.8191 7.26523 10.0388 6.03078C10.1824 5.22507 10.0115 4.42034 9.23899 3.63025C8.96456 3.34899 8.06705 2.66438 8.41179 1.48462C8.41179 1.48462 7.56799 2.20048 7.85414 3.49157C8.17643 4.94576 9.54858 5.44481 8.93135 7.77796Z" fill="url(#paint4_linear_146_26538)" />
                                            <path d="M8.25403 6.12646C8.49134 6.21045 9.45234 7.70761 8.55873 9.27997C7.76376 10.6785 6.20996 10.8953 6.20996 10.8953C6.20996 10.8953 7.4366 9.66671 7.91612 8.50063C8.34973 7.44881 8.25403 6.12646 8.25403 6.12646Z" fill="url(#paint5_linear_146_26538)" />
                                            <defs>
                                                <radialGradient id="paint0_radial_146_26538" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.17763 7.91472) scale(8.542 8.68551)">
                                                    <stop offset="0.39" stop-color="#FFD600" />
                                                    <stop offset="0.69" stop-color="#FF9800" />
                                                    <stop offset="1" stop-color="#F44336" />
                                                </radialGradient>
                                                <linearGradient id="paint1_linear_146_26538" x1="5.17673" y1="5.06933" x2="5.32205" y2="0.454221" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.165" stop-color="#FFEB3B" />
                                                    <stop offset="1" stop-color="#FFD600" />
                                                </linearGradient>
                                                <radialGradient id="paint2_radial_146_26538" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.99915 11.3134) scale(9.80868)">
                                                    <stop offset="0.119" stop-color="#FF6D00" />
                                                    <stop offset="0.485" stop-color="#F44336" />
                                                    <stop offset="0.814" stop-color="#B71C1C" />
                                                </radialGradient>
                                                <linearGradient id="paint3_linear_146_26538" x1="3.07397" y1="9.06804" x2="4.52757" y2="13.4832" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.076" stop-color="#FFEB3B" />
                                                    <stop offset="1" stop-color="#FFD600" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint4_linear_146_26538" x1="7.94507" y1="4.21935" x2="10.4732" y2="5.65205" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFD600" />
                                                    <stop offset="1" stop-color="#FFD600" stop-opacity="0" />
                                                </linearGradient>
                                                <linearGradient id="paint5_linear_146_26538" x1="7.25524" y1="6.06338" x2="7.96377" y2="13.3858" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.187" stop-color="#FFEB3B" />
                                                    <stop offset="0.934" stop-color="#FFD600" stop-opacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[#7D7D7D] text-[10px]">12 sec ago</p>
                        </div>
                    </div>
                    {/* Second Card */}
                    <div className="mt-2 flex items-center navborder pb-3 text-white gap-4 py-4">
                        <img
                            src={lat2}
                            alt=""
                            className="latest-act rounded-xl border-[1px] border-[#8F8F8F]"
                        />
                        <div className="flex items-start justify-normal gap-2">
                            <div>
                                <p className="text-[12px] font-bold">{"You added new post"}</p>
                                <div className="flex items-center gap-1">
                                    <div className="w-[7px] h-[7px] bg-gradient-to-b from-[#00E7FC] to-[#EC46E5] rounded-full"></div>
                                    <span className="text-[#B6B6B6] text-[10px]">
                                        Hello everyone , welcome to my..
                                    </span>
                                </div>
                            </div>
                            <p className="text-[#7D7D7D] text-[10px]">1 day ago</p>
                        </div>
                    </div>
                    {/* Third Card */}
                    <div className="mt-2 flex items-center  text-white gap-4 pt-4">
                        <img
                            src={lat3}
                            alt=""
                            className="latest-act rounded-xl border-[1px] border-[#8F8F8F]"
                        />
                        <div className="flex items-start justify-normal gap-2">
                            <div>
                                <p className="text-[12px] font-bold">
                                    {"Joined new group “Art work”"}
                                </p>
                            </div>
                            <p className="text-[#7D7D7D] text-[10px]">12 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Latest products */}
            <div className="bg-[#00072D] rounded-3xl py-5 my-7">
                <div className="mx-5 my-3">
                    <div className="mt-2 flex justify-between mb-3 navborder  pb-3">
                        <p className="text-sm text-white font-medium">Latest products</p>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM15.7692 8.75721C15.7692 8.86712 15.7256 8.97253 15.6478 9.05025C15.5701 9.12797 15.4647 9.17163 15.3548 9.17163H12.4923C12.4103 9.17177 12.3301 9.14754 12.2619 9.10204C12.1937 9.05653 12.1406 8.99179 12.1092 8.91603C12.0778 8.84027 12.0697 8.75691 12.0857 8.67651C12.1018 8.5961 12.1414 8.52229 12.1995 8.46442L13.2654 7.39856L12.9962 7.08558C12.5146 6.58563 11.9166 6.21281 11.2557 6.00045C10.5949 5.78809 9.89165 5.7428 9.20899 5.86865C8.52633 5.99449 7.88549 6.28753 7.34377 6.72158C6.80205 7.15563 6.37632 7.71715 6.10466 8.35595C5.833 8.99475 5.72387 9.69091 5.78702 10.3822C5.85017 11.0735 6.08364 11.7383 6.46656 12.3173C6.84947 12.8963 7.36989 13.3714 7.9813 13.7001C8.5927 14.0288 9.27603 14.2009 9.97019 14.201C10.8389 14.2002 11.6861 13.9306 12.3956 13.4292C13.105 12.9278 13.642 12.2191 13.9327 11.4005C13.9664 11.3051 14.0185 11.2174 14.0861 11.1422C14.1537 11.067 14.2355 11.0059 14.3267 10.9623C14.4179 10.9187 14.5168 10.8935 14.6178 10.8881C14.7188 10.8828 14.8198 10.8973 14.9151 10.931C15.0105 10.9647 15.0982 11.0168 15.1734 11.0844C15.2486 11.152 15.3098 11.2338 15.3534 11.325C15.3969 11.4162 15.4221 11.5152 15.4275 11.6161C15.4329 11.7171 15.4183 11.8181 15.3846 11.9135C15.034 12.9057 14.4174 13.7825 13.6021 14.4479C12.7869 15.1134 11.8044 15.5419 10.7621 15.6867C9.71974 15.8315 8.65765 15.687 7.69189 15.269C6.72612 14.851 5.89386 14.1755 5.28606 13.3164C4.67825 12.4573 4.3183 11.4477 4.24554 10.3978C4.17278 9.34801 4.39001 8.29838 4.8735 7.36366C5.35698 6.42894 6.08811 5.64512 6.98697 5.09785C7.88583 4.55059 8.91784 4.26094 9.97019 4.26058C10.7469 4.25761 11.5159 4.41369 12.23 4.71921C12.944 5.02472 13.588 5.4732 14.1221 6.03702L14.149 6.06683L14.3562 6.30721L15.062 5.60144C15.0996 5.56299 15.1445 5.53239 15.194 5.51143C15.2435 5.49046 15.2967 5.47955 15.3505 5.47933C15.4052 5.47888 15.4595 5.48929 15.5101 5.50996C15.5608 5.53062 15.6069 5.56113 15.6457 5.59971C15.6845 5.63829 15.7153 5.68419 15.7362 5.73475C15.7572 5.7853 15.7679 5.83951 15.7678 5.89423L15.7692 8.75721Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    {/* Group Information */}
                    <div className="flex items-center justify-between gap-2 w-full">
                        <div className="w-1/2 border-[1px] rounded-xl each-suggestion ">
                            <img src={lp1} alt="" className="w-full latest-prod" />
                            <div className="text-white text-start ps-2 pt-1 pb-4">
                                <h2 className="font-bold ">Graph</h2>
                                <p className="text-sm">$55.00</p>
                            </div>
                        </div>
                        <div className="w-1/2 border-[1px] rounded-xl each-suggestion">
                            <img src={lp2} alt="" className="w-full latest-prod" />
                            <div className="text-white text-start ps-2 pt-1 pb-4">
                                <h2 className="font-bold ">Clothes</h2>
                                <p className="text-sm">$50.00</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* Affiliate Link */}
            <div className="bg-[#00072D] rounded-3xl px-4 py-2">
                <div className="flex gap-1 items-center text-white">
                    <div className="affiliate-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M16.3851 17.7502H6.82817C6.07726 17.7502 5.46289 17.1359 5.46289 16.385V13.6544H6.82817V16.385H16.3851V6.82804H13.6545V5.46277H16.3851C17.136 5.46277 17.7504 6.07714 17.7504 6.82804V16.385C17.7504 17.1359 17.136 17.7502 16.3851 17.7502Z" fill="white" />
                            <path d="M11.6076 9.55937C11.2663 9.55937 10.9933 9.62763 10.7202 9.76416L7.98967 7.03361C8.12619 6.76055 8.19446 6.4875 8.19446 6.14618C8.19446 4.9857 7.30703 4.09827 6.14655 4.09827C4.98606 4.09827 4.09863 4.9857 4.09863 6.14618C4.09863 7.30666 4.98606 8.19409 6.14655 8.19409C6.48786 8.19409 6.76092 8.12583 7.03397 7.9893L9.76452 10.7199C9.628 10.9929 9.55973 11.266 9.55973 11.6073C9.55973 12.7678 10.4472 13.6552 11.6076 13.6552C12.7681 13.6552 13.6556 12.7678 13.6556 11.6073C13.6556 10.4468 12.7681 9.55937 11.6076 9.55937ZM5.46391 6.14618C5.46391 5.7366 5.73696 5.46354 6.14655 5.46354C6.55613 5.46354 6.82918 5.7366 6.82918 6.14618C6.82918 6.55576 6.55613 6.82882 6.14655 6.82882C5.73696 6.82882 5.46391 6.55576 5.46391 6.14618ZM11.6076 12.2899C11.1981 12.2899 10.925 12.0169 10.925 11.6073C10.925 11.1977 11.1981 10.9246 11.6076 10.9246C12.0172 10.9246 12.2903 11.1977 12.2903 11.6073C12.2903 12.0169 12.0172 12.2899 11.6076 12.2899Z" fill="white" />
                            <path d="M1.36527 0H10.9222C11.6731 0 12.2875 0.614374 12.2875 1.36527V4.09582H10.9222V1.36527H1.36527V10.9222H4.09582V12.2875H1.36527C0.614374 12.2875 0 11.6731 0 10.9222V1.36527C0 0.614374 0.614374 0 1.36527 0Z" fill="white" />
                        </svg>
                    </div>
                    <h2>Affiliate Link</h2>
                </div>
                <input
                    type="text"
                    name=""
                    placeholder="123334544#?>433#8489*)_09^%&75432"
                    id=""
                    className="bg-[#0A123E] py-2 px-4 rounded-xl my-3 w-full text-[10px]"
                />
                <div className="flex items-center justify-center gap-3">
                    <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
                        <div className="flex justify-center items-center gap-2">
                            <div className="generate-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                    <path d="M3.5 5.95804C4.2417 5.83267 4.90924 5.43324 5.37033 4.8389C5.83141 4.24457 6.0524 3.49871 5.9895 2.74912C5.92659 1.99954 5.58438 1.30093 5.03069 0.791761C4.477 0.282587 3.75222 0 3 0C2.24778 0 1.52301 0.282587 0.96932 0.791761C0.415627 1.30093 0.0734196 1.99954 0.0105143 2.74912C-0.052391 3.49871 0.168596 4.24457 0.629683 4.8389C1.09077 5.43324 1.75831 5.83267 2.5 5.95804V10.04C1.75831 10.1654 1.09077 10.5648 0.629683 11.1592C0.168596 11.7535 -0.052391 12.4994 0.0105143 13.249C0.0734196 13.9985 0.415627 14.6971 0.96932 15.2063C1.52301 15.7155 2.24778 15.9981 3 15.9981C3.75222 15.9981 4.477 15.7155 5.03069 15.2063C5.58438 14.6971 5.92659 13.9985 5.9895 13.249C6.0524 12.4994 5.83141 11.7535 5.37033 11.1592C4.90924 10.5648 4.2417 10.1654 3.5 10.04V8.99904H9C9.66304 8.99904 10.2989 8.73564 10.7678 8.2668C11.2366 7.79796 11.5 7.16208 11.5 6.49904V5.95804C12.2417 5.83267 12.9092 5.43324 13.3703 4.8389C13.8314 4.24457 14.0524 3.49871 13.9895 2.74912C13.9266 1.99954 13.5844 1.30093 13.0307 0.791761C12.477 0.282587 11.7522 0 11 0C10.2478 0 9.52301 0.282587 8.96932 0.791761C8.41562 1.30093 8.07342 1.99954 8.01051 2.74912C7.94761 3.49871 8.16859 4.24457 8.62968 4.8389C9.09077 5.43324 9.7583 5.83267 10.5 5.95804V6.49904C10.5 6.89686 10.342 7.27839 10.0607 7.5597C9.77936 7.841 9.39783 7.99904 9 7.99904H3.5V5.95804ZM10.5 10.999C9.83696 10.999 9.20108 11.2624 8.73224 11.7313C8.2634 12.2001 8 12.836 8 13.499C8 14.1621 8.2634 14.798 8.73224 15.2668C9.20108 15.7356 9.83696 15.999 10.5 15.999H11C11.1326 15.999 11.2598 15.9464 11.3536 15.8526C11.4473 15.7588 11.5 15.6316 11.5 15.499C11.5 15.3664 11.4473 15.2392 11.3536 15.1455C11.2598 15.0517 11.1326 14.999 11 14.999H10.5C10.1022 14.999 9.72065 14.841 9.43934 14.5597C9.15804 14.2784 9 13.8969 9 13.499C9 13.1012 9.15804 12.7197 9.43934 12.4384C9.72065 12.1571 10.1022 11.999 10.5 11.999H11C11.1326 11.999 11.2598 11.9464 11.3536 11.8526C11.4473 11.7588 11.5 11.6316 11.5 11.499C11.5 11.3664 11.4473 11.2392 11.3536 11.1455C11.2598 11.0517 11.1326 10.999 11 10.999H10.5ZM14 10.999C13.8674 10.999 13.7402 11.0517 13.6464 11.1455C13.5527 11.2392 13.5 11.3664 13.5 11.499C13.5 11.6316 13.5527 11.7588 13.6464 11.8526C13.7402 11.9464 13.8674 11.999 14 11.999H14.5C14.8978 11.999 15.2794 12.1571 15.5607 12.4384C15.842 12.7197 16 13.1012 16 13.499C16 13.8969 15.842 14.2784 15.5607 14.5597C15.2794 14.841 14.8978 14.999 14.5 14.999H14C13.8674 14.999 13.7402 15.0517 13.6464 15.1455C13.5527 15.2392 13.5 15.3664 13.5 15.499C13.5 15.6316 13.5527 15.7588 13.6464 15.8526C13.7402 15.9464 13.8674 15.999 14 15.999H14.5C15.163 15.999 15.7989 15.7356 16.2678 15.2668C16.7366 14.798 17 14.1621 17 13.499C17 12.836 16.7366 12.2001 16.2678 11.7313C15.7989 11.2624 15.163 10.999 14.5 10.999H14ZM10 13.499C10 13.3664 10.0527 13.2392 10.1464 13.1455C10.2402 13.0517 10.3674 12.999 10.5 12.999H14.5C14.6326 12.999 14.7598 13.0517 14.8536 13.1455C14.9473 13.2392 15 13.3664 15 13.499C15 13.6316 14.9473 13.7588 14.8536 13.8526C14.7598 13.9464 14.6326 13.999 14.5 13.999H10.5C10.3674 13.999 10.2402 13.9464 10.1464 13.8526C10.0527 13.7588 10 13.6316 10 13.499Z" fill="#0A123E" />
                                </svg>
                            </div>
                            <p className="text-xs font-bold capitalize">Generate Link</p>
                        </div>
                    </button>
                    <button className="btn border-0 btn-sm bg-gradient-to-r from-[#EC46E5] via-[#00E7FC] to-[#B82BEA] my-2">
                        <div className="flex justify-center items-center gap-2">
                            <div className="send-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.77331 9.09078L9.58651 13.6548C9.70959 13.8548 9.9019 13.8525 9.9796 13.8417C10.0573 13.831 10.2442 13.7833 10.3119 13.5563L13.8298 1.67509C13.8913 1.46508 13.7782 1.322 13.7274 1.27123C13.6782 1.22046 13.5374 1.11199 13.3336 1.16968L1.44386 4.65137C1.21847 4.71752 1.16924 4.90676 1.15847 4.98446C1.1477 5.06369 1.14462 5.25985 1.34386 5.38524L5.9602 8.27228L10.0388 4.15058C10.2627 3.92441 10.6281 3.92211 10.855 4.14596C11.082 4.36982 11.0835 4.73599 10.8596 4.96215L6.77331 9.09078ZM9.9196 15.0003C9.38419 15.0003 8.8934 14.7279 8.60416 14.2602L5.62173 9.42079L0.732296 6.36298C0.205351 6.03296 -0.0700452 5.44525 0.0153429 4.82753C0.0999618 4.20981 0.523825 3.71902 1.11923 3.5444L13.009 0.062716C13.5559 -0.0972906 14.1421 0.0542542 14.5452 0.455809C14.9483 0.86121 15.0983 1.45354 14.9352 2.0028L11.4174 13.8833C11.2412 14.481 10.7489 14.9033 10.1327 14.9856C10.0604 14.9949 9.99037 15.0003 9.9196 15.0003Z" fill="#00072D" />
                                </svg>
                            </div>
                            <p className="text-xs font-bold capitalize">Copy</p>
                        </div>
                    </button>
                </div>
            </div>
            {/* Online Friends */}
            <div className="trend my-7">
                <div className="flex items-center justify-center py-3 gap-2">
                    <div className="flex items-center">
                        <img src={m1} alt="" className="online-head" />
                        <img src={m2} alt="" className="online-head -ml-2 " />
                        <img src={m3} alt="" className=" -ml-2 relative online-head" />
                        <button className="btn bg-transparent text-[10px] text-white border-none -ml-10 z-10">
                            12+
                        </button>
                    </div>

                    <p className="text-white">12+ Friends online</p>
                </div>
            </div>
            {/* Pro Member */}
            <div className="trend my-7">
                <div className="flex items-center justify-between py-3 gap-2 px-6">
                    <div className="text-white flex items-center justify-start">
                        <div className="award">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4.25977 11.0199V15.9899C4.25977 17.8099 4.25977 17.8099 5.97977 18.9699L10.7098 21.6999C11.4198 22.1099 12.5798 22.1099 13.2898 21.6999L18.0198 18.9699C19.7398 17.8099 19.7398 17.8099 19.7398 15.9899V11.0199C19.7398 9.19994 19.7398 9.19994 18.0198 8.03994L13.2898 5.30994C12.5798 4.89994 11.4198 4.89994 10.7098 5.30994L5.97977 8.03994C4.25977 9.19994 4.25977 9.19994 4.25977 11.0199Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6298 10.99L13.1998 11.88C13.2898 12.02 13.4898 12.16 13.6398 12.2L14.6598 12.46C15.2898 12.62 15.4598 13.16 15.0498 13.66L14.3798 14.47C14.2798 14.6 14.1998 14.83 14.2098 14.99L14.2698 16.04C14.3098 16.69 13.8498 17.02 13.2498 16.78L12.2698 16.39C12.1198 16.33 11.8698 16.33 11.7198 16.39L10.7398 16.78C10.1398 17.02 9.67978 16.68 9.71978 16.04L9.77978 14.99C9.78978 14.83 9.70978 14.59 9.60978 14.47L8.93978 13.66C8.52978 13.16 8.69978 12.62 9.32978 12.46L10.3498 12.2C10.5098 12.16 10.7098 12.01 10.7898 11.88L11.3598 10.99C11.7198 10.45 12.2798 10.45 12.6298 10.99Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h2>Pro Member</h2>
                    </div>

                    <p className="text-white font-light">Active Now</p>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-white flex justify-between px-3 pb-4">
                <p>© 2022 So Inverse</p>
                <p>Language</p>
            </div>
            {/* Menu */}
            <div className="text-white flex text-xs items-center justify-between px-3">
                <span>About</span>
                <span>Blog</span>
                <span>Connect Us</span>
                <span>Developers</span>
                <span>More</span>
                <div className="upArrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M0 5.17L4.665 0L9.33 5.17H0Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HomeSecondCol;