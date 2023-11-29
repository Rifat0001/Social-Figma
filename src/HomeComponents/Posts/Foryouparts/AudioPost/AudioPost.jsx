import Img from '../../../../assets/HomeMainFeeds/hudson.png';
// import rec from '../../../assets/reply/rec.png'

import './Wave.css'
import AudioPlayer from './AudioPlayer';
import Reactions from '../../../../Global/Reactions';
import CommentSection from '../../../../Global/CommentSection.jsx';
import MoreInfo from '../../../../Global/MoreInfo.jsx';
const AudioPost = () => {
    return (
        <div className=" mx-auto relative mt-8 text-white">
            <div className="pb-5 ">
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
                                {/* <div className=" hidden md:block">
                                    <FaGlobe />
                                    <FaAngleDown />
                                </div> */}
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
                <div><p className='post-mini-des  mt-2 md:ms-0 ms-8 font-light'>boredom is killing me!!</p></div>
                <div className='md:ms-0 ms-4 mt-4 audio-frame'>
                    <AudioPlayer></AudioPlayer>
                </div>
            </div>
            <div className="">
                <Reactions></Reactions>
                <div className="mt-5">
                    <CommentSection></CommentSection>
                </div>
            </div>
        </div >
    );
};

export default AudioPost;