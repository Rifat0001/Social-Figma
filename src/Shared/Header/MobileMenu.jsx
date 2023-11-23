import { useState } from 'react';
import './Header.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Header/headLogo.png'
import text from '../../assets/Header/SO INVERSED.png'
import person from '../../assets/Header/h-person.png'
import bell from '../../assets/Header/bell-icon.png'
import notificationIcon from '../../assets/Header/notificationIcon.png'
import offnotification from '../../assets/Header/offnotification.png'
const MobileMenu = () => {
    const [notificationData, setNotificationData] = useState([])
    useEffect(() => {
        fetch('notification.json')
            .then(res => res.json())
            .then(data => setNotificationData(data))
    }, [])
    const [isNotificationOn, setIsNotificationOn] = useState(true);
    const handleDivClick = () => {
        setIsNotificationOn((prevState) => !prevState);
    };
    return (
        <section className="navbar header-bg  visible flex justify-between  md:hidden w-full px-6">
            <div className="flex gap-4">
                <Link to='/' > <img src={person} className='mobile-dp' alt="" /></Link>
                <button className="header-icon-bg">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="white" />
                        </svg>
                    </div>
                </button>
            </div>
            <Link to='/' > <img src={logo} className='logo' alt="" /></Link>
            {/* notification icons  */}
            <div className="flex">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <button tabIndex={0} className="header-icon-bg mx-2">
                        <div className="flex justify-center content-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                                <path d="M15.6859 0.0292969C17.094 0.0292969 18.4485 0.587897 19.4449 1.59021C20.4424 2.59042 21 3.9395 21 5.3518V13.6781C21 16.6187 18.6165 19.0006 15.6859 19.0006H5.313C2.38245 19.0006 0 16.6187 0 13.6781V5.3518C0 2.41125 2.37195 0.0292969 5.313 0.0292969H15.6859ZM16.8735 5.5099C16.653 5.4983 16.443 5.57314 16.2844 5.72069L11.55 9.51495C10.941 10.0219 10.0684 10.0219 9.45 9.51495L4.725 5.72069C4.39845 5.47828 3.94695 5.5099 3.675 5.79447C3.3915 6.07904 3.36 6.53224 3.60045 6.84843L3.738 6.98545L8.5155 10.727C9.1035 11.1908 9.81645 11.4437 10.563 11.4437C11.3075 11.4437 12.033 11.1908 12.6199 10.727L17.3565 6.92221L17.4405 6.83789C17.6915 6.53224 17.6915 6.08958 17.4289 5.78393C17.283 5.62689 17.0824 5.53098 16.8735 5.5099Z" fill="white" />
                            </svg>
                        </div>

                        <div className="btn-top-icon flex justify-center items-center">
                            <p className="notification-text">99+</p>
                        </div>
                    </button>
                    <ul
                        tabIndex={0}
                        className="dropdown-content  z-[100] menu p-2 shadow bg-msg rounded-md w-[300px] md:w-[430px]"
                    >
                        <li className="msg-border">
                            <div className="flex  items-start gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                                    <circle cx="26" cy="26" r="26" fill="#050C36" />
                                    <path d="M21.2236 37.2547C21.7823 37.1365 25.1868 37.1365 25.7456 37.2547C26.2232 37.365 26.7397 37.6228 26.7397 38.1856C26.7119 38.7214 26.3976 39.1965 25.9633 39.4981C25.4001 39.9372 24.7392 40.2152 24.0483 40.3154C23.6662 40.3649 23.2907 40.366 22.9219 40.3154C22.2299 40.2152 21.569 39.9372 21.007 39.497C20.5715 39.1965 20.2572 38.7214 20.2294 38.1856C20.2294 37.6228 20.7459 37.365 21.2236 37.2547ZM23.5505 18C25.8754 18 28.2503 19.1031 29.661 20.9334C30.5763 22.112 30.9961 23.2894 30.9961 25.1197V25.5959C30.9961 26.9996 31.3671 27.8269 32.1836 28.7804C32.8023 29.4828 33 30.3844 33 31.3626C33 32.3397 32.679 33.2672 32.0358 34.0203C31.1939 34.923 30.0064 35.4994 28.7946 35.5996C27.0384 35.7493 25.2811 35.8753 23.5006 35.8753C21.7189 35.8753 19.9627 35.7999 18.2065 35.5996C16.9936 35.4994 15.8061 34.923 14.9653 34.0203C14.3221 33.2672 14 32.3397 14 31.3626C14 30.3844 14.1988 29.4828 14.8164 28.7804C15.6584 27.8269 16.005 26.9996 16.005 25.5959V25.1197C16.005 23.2399 16.4737 22.0107 17.439 20.8074C18.8741 19.0525 21.1746 18 23.4506 18H23.5505Z" fill="white" />
                                </svg>
                                <div className="flex justify-between items-start gap-[138px]">
                                    <div className="space-y-3">
                                        <div>
                                            <h2 className="header-person-name">Kevin Alexander </h2>
                                        </div>
                                        <p className="text-white ">Me : okok</p>
                                    </div>
                                    <div> <p className="text-white ">5 m</p></div>
                                </div>
                            </div>
                        </li>
                        <li className=" msg-border">
                            <div className="flex items-start gap-5">
                                <img src={person} alt="" />
                                <div className="flex justify-between items-start gap-[138px]">
                                    <div className=" space-y-3">
                                        <div>
                                            <h2 className="text-white ">Kevin Alexander </h2>
                                            <p className="gradient-text">@kevinalexa11</p>
                                        </div>
                                        <p className="text-white ">Me : okok</p>
                                    </div>
                                    <div> <p className="text-white ">5 m</p></div>
                                </div>
                            </div>
                        </li>
                        <button className="text-white mt-2">Sell All</button>
                    </ul>
                </div>

                {/* bell icon button  */}

                <div className="dropdown dropdown-bottom dropdown-end">
                    <button tabIndex={0} className="header-icon-bg mx-2">
                        <div className="flex justify-center content-center mt-4">
                            <img src={bell} alt="" />
                        </div>
                        <div className="btn-top-icon items-center flex justify-center">
                            <p className="notification-text">99+</p>
                        </div>
                    </button>
                    <div className="dropdown-content z-[100] menu p-2 shadow bg-msg rounded-md w-[350px] md:w-[430px]">
                        <button className="flex text-white items-center justify-start gap-3 notification-border border-[1px] border-l-0 my-3 -ml-2" onClick={handleDivClick}>
                            <img src={isNotificationOn ? notificationIcon : offnotification} alt="" />
                            <h2>{isNotificationOn ? 'Turn off the notification sound' : 'Turn on the notification sound'}</h2>
                        </button>
                        <ul className="" tabIndex={0}>
                            {
                                notificationData.map((singleItem) =>
                                    <li key={singleItem.id} className=" msg-border  ">
                                        <div className="flex items-start gap-5">
                                            <img src={singleItem.img} alt="" />
                                            <div className="flex justify-between items-start gap-[138px]">
                                                <div className="">
                                                    <div className="flex items-center gap-2 pb-0">
                                                        <h2 className="font-semibold text-white ">{singleItem.name} </h2>
                                                        <p className="text-xs text-white">{singleItem.comment}</p>
                                                    </div>
                                                    <p className="gradient-mail pb-3">@kevinalexa11</p>
                                                    <div className="flex items-center gap-2">
                                                        <img src={singleItem.icon} alt="" className="mt-1" />
                                                        <p className="text-white ">{singleItem.time}</p>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>)
                            }
                            <li className="text-white  navborders">
                                <div className="flex items-start gap-5">
                                    <img src={person} alt="" />
                                    <div className="flex justify-between items-start gap-[138px]">
                                        <div className=" space-y-3">
                                            <div>
                                                <h2>Kevin Alexander </h2>
                                                <p className="gradient-text">@kevinalexa11</p>
                                            </div>
                                            <p className="">Me : okok</p>
                                        </div>
                                        <div>5 m</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className="dropdown dropdown-end">
                <div tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                    <div className="w-10 rounded-full">
                        <img src={person} />
                    </div>
                    <div className="header-profile-arrow  items-center flex justify-center">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                                <path d="M0.129218 0.129218C0.285845 -0.0274098 0.530941 -0.0416487 0.703654 0.086501L0.753135 0.129218L4.55882 3.93471L8.36451 0.129218C8.52114 -0.0274098 8.76624 -0.0416487 8.93895 0.086501L8.98843 0.129218C9.14506 0.285845 9.1593 0.530941 9.03115 0.703654L8.98843 0.753135L4.87078 4.87078C4.71416 5.02741 4.46906 5.04165 4.29635 4.9135L4.24686 4.87078L0.129218 0.753135C-0.0430725 0.580845 -0.0430725 0.301508 0.129218 0.129218Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="mt-3 p-2  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li>
                        <a>Settings</a>
                    </li>
                    <li>
                        <a>Logout</a>
                    </li>
                </ul>
            </div> */}
        </section >
    );
};

export default MobileMenu;