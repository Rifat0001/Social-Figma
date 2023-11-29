import { FaHeart, FaRegComments } from 'react-icons/fa';

const Reactions = () => {
    return (
        <div className="text-end ">
            <div className="stats shadow bg-[rgba(255,255,255,0.10)] rounded-[12px] border-y-[1px]">
                <div className="flex items-center justify-center md:gap-3 gap-1 md:px-2 px-1">
                    <div className=" text-white">200.8K</div>
                    <FaHeart color="#FF0000" />
                </div>
                <div className="pro-side flex justify-center items-center md:gap-5 gap-1 md:px-2 px-1">
                    <h2 className="text-white">4.2K</h2>
                    <FaRegComments color="#3ADF00" />
                </div>
                <div className="pro-side flex justify-center items-center md:gap-7 gap-2 md:px-2 px-1">
                    <h2 className="text-white">24</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M8.2 1C9.4 1 10 1.5555 10 2.6665V6.54401C10 7.63851 9.154 8.06201 8.116 7.49001L7.324 7.05001C7.144 6.95101 6.856 6.95101 6.676 7.05001L5.884 7.49001C4.846 8.06201 4 7.63851 4 6.54401V2.6665C4 1.5555 4.6 1 5.8 1H8.2Z" stroke="#B82BEA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.892 2.64443C1.846 2.95793 1 4.11293 1 6.44494V8.11144C1 10.8889 2.2 11.9999 5.2 11.9999H8.8C11.8 11.9999 13 10.8889 13 8.11144V6.44494C13 4.07443 12.124 2.91393 10 2.62793" stroke="#B82BEA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="pro-side flex items-center justify-center md:gap-10 gap-1 md:px-2 px-1">
                    <h2 className="text-white">1</h2>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                            <path d="M7.75158 4.72629C7.07344 5.90087 7.1227 7.17814 7.28371 8.04285L7.28946 8.07337L8.84443 7.72231C8.69389 6.88396 8.79557 6.10386 9.13108 5.52274C9.80806 4.35017 11.2872 3.93197 12.4282 4.5907C13.5691 5.24943 13.9466 6.73953 13.2696 7.9121C12.2408 9.69395 9.1864 9.54525 9.15557 9.54355C8.9734 9.53187 5.08944 9.33725 3.57021 11.9686C2.45402 13.9019 3.09295 16.368 4.99464 17.466C6.89633 18.5639 9.3515 17.8842 10.4677 15.9509C11.0144 15.0039 11.1758 13.8544 10.9341 12.6262L10.9287 12.5997L9.37577 12.9592C9.53793 13.8047 9.44096 14.5434 9.0882 15.1544C8.41121 16.327 6.93205 16.7452 5.79109 16.0865C4.65013 15.4278 4.27272 13.9377 4.94971 12.7651C5.97846 10.9832 9.03288 11.1319 9.0637 11.1336C9.24587 11.1453 13.1298 11.3399 14.6491 8.70855C15.7653 6.77525 15.1263 4.30915 13.2246 3.21121C11.3229 2.11326 8.86778 2.79299 7.75158 4.72629Z" fill="#6CC7FA" />
                            <path d="M10.6494 6.72337L8.0757 9.29712L5.50195 6.72337L10.6494 6.72337Z" fill="#6CC7FA" />
                            <path d="M7.84469 14.033L10.4184 11.4592L12.9922 14.033L7.84469 14.033Z" fill="#6CC7FA" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reactions;