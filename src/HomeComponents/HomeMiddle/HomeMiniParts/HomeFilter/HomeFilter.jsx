import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faNewspaper, faVideo, faMusic, faLocationDot, faCertificate, faBookmark } from '@fortawesome/free-solid-svg-icons'
import './HomeFilter.css'
const HomeFilter = () => {
    return (
        <div className='bg-[#0A123E] flex items-center h-[80px] justify-around give-post my-6 md:mx-6 mx-3'>

            <NavLink to='/forYou' className='home-tabs' >
                <div className='change-bg md:h-[52px]  md:w-[52px] h-[32px] w-[32px] rounded-full flex justify-center items-center'>
                    {/* <FaNewspaper className='text-3xl text-[#050C36]'></FaNewspaper> */}
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faCertificate} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>For You</p>
            </NavLink>
            <NavLink to='feeds' className='home-tabs'>
                <div className='change-bg md:h-[52px] md:w-[52px] h-[32px] w-[32px] rounded-full flex justify-center items-center'>
                    {/* <FaNewspaper className='text-3xl text-[#050C36]'></FaNewspaper> */}
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faNewspaper} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Feed</p>
            </NavLink>
            <NavLink to='photos' className='home-tabs'>
                <div className='change-bg md:h-[52px]  md:w-[52px] h-[32px] w-[32px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faImage} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Photos</p>
            </NavLink>
            <div className='home-tabs'>
                <div className='change-bg md:h-[52px]  md:w-[52px] h-[32px] w-[32px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faVideo} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Video</p>
            </div>
            <div className='home-tabs'>
                <div className='change-bg md:h-[52px]  md:w-[52px] h-[32px] w-[32px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faMusic} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Audio</p>
            </div>
            <div className='home-tabs'>
                <div className='change-bg md:h-[52px]  md:w-[52px] h-[32px] w-[32px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faLocationDot} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Located</p>
            </div>
            <div className='home-tabs'>
                <div className='change-bg md:h-[52px]  md:w-[52px] h-[32px] w-[32px] rounded-full flex justify-center items-center'>
                    <FontAwesomeIcon className='text-lg sub-icon' icon={faBookmark} />
                </div>
                <p className='text-[8px] mt-2 text-white text-light text-center'>Saved Post</p>
            </div>
        </div>
    );
};

export default HomeFilter;