// import { faHouse, faStarOfLife, faBookOpen, faBoxArchive, faBriefcase, faGear, faNewspaper, faUsers, faSquareRss, faStore, faMusic, faFilterCircleDollar } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStarOfLife, faBookOpen, faBoxArchive, faBriefcase, faGear, faNewspaper, faUsers, faSquareRss, faStore, faMusic, faFilterCircleDollar } from '@fortawesome/free-solid-svg-icons'
import './SideNav.css'
const SideNav = () => {
    return (
        <div className=' text-center flex justify-center '>
            <div>
                <div className='mt-5 '>
                    <button className='active-icon'>
                        <div className='flex justify-center items-center'>
                            <FontAwesomeIcon icon={faHouse} />
                        </div>
                    </button>
                    <p className='text-white text-xs text-center mt-1'>home</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faStarOfLife} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>casts</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>academic</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faStore} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>market</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faNewspaper} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>pages</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>groups</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faMusic} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>music</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faBoxArchive} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>products</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faSquareRss} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>blog</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>jobs</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faFilterCircleDollar} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>funding</p>
                </div>
                <div className='mt-6'>
                    <button className='side-icon'>
                        <div className='flex justify-center'>
                            <FontAwesomeIcon icon={faGear} />
                        </div>

                    </button>
                    <p className='text-white text-xs text-center mt-1'>settings</p>
                </div>
            </div>


        </div>
    );
};

export default SideNav;