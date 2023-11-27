import { useState } from 'react';
import { FaBolt, FaEllipsisH, FaPen, FaTrash } from "react-icons/fa";
import './GlobalDesign.css'
const MoreInfo = () => {
    const [isDisabled, setIsDisabled] = useState("Disable");
    const handleDisable = () => {
        setIsDisabled((prevState) =>
            prevState === "Enable" ? "Disable" : "Enable"
        );
    };

    return (
        <div className="dropdown dropdown-left dropdown-end">
            <label tabIndex={0} className=" ">
                <FaEllipsisH size={30} />
            </label>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu  each-suggestion"
            >
                <li onClick={() => window.my_modal_3.showModal()}>
                    <a className="flex items-start gap-3">
                        <FaPen size={15} className="mt-1" />
                        <div>
                            <h2 className="font-bold text-[12px] capitalize">Edit Post</h2>
                            <p className="font-[300] text-[11px] normal-case">
                                edit post information.
                            </p>
                        </div>
                    </a>
                </li>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box modal-bg flex-col">
                        <div className=" w-full">
                            <button className="btn btn-sm btn-circle btn-ghost text-white btn-outline absolute right-5 top-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <h3 className="font-bold text-lg text-white text-start">
                                Edit Post
                            </h3>
                        </div>

                        <div className="text-right">
                            <textarea
                                placeholder="Bio"
                                className="textarea-lg textArea w-full bg-[#00072D] rounded-3xl mt-3"
                            ></textarea>
                            <div className="btn-wrapper">
                                <button className="btn-update mt-3 btn-border text-white ">
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* i love u; */}
                </dialog>
                <li onClick={() => window.my_modal_4.showModal()}>
                    <a className="flex items-start gap-3">
                        <FaTrash size={15} className="mt-1" />
                        <div>
                            <h2 className="font-bold text-[12px] capitalize">delete post</h2>
                            <p className="font-[300] text-[11px] normal-case">
                                delete this post completely.
                            </p>
                        </div>
                    </a>
                </li>
                <dialog id="my_modal_4" className="modal ">
                    <form method="dialog" className="modal-box modal-bg w-full flex-col">
                        <div className=" w-full ">
                            <button className="btn btn-sm btn-circle btn-ghost text-white btn-outline absolute right-5 top-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <h3 className="font-bold text-lg text-white text-start">
                                Delete Comment
                            </h3>
                        </div>
                        <div className="text-right">
                            <h2 className="text-start text-white py-2">
                                are you sure you want to delete this comment?
                            </h2>
                            <div className="btn-wrapper">
                                <button className=" mt-3 btn-border-delete text-white ">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </form>
                </dialog>
                <li onClick={handleDisable}>
                    <a className="flex items-start gap-3">
                        {/* <FaTrash size={15} className="mt-1" /> */}
                        <div className="">  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.59711C0 1.16277 1.1546 0 2.57886 0H9.14323C10.5675 0 11.7221 1.16277 11.7221 2.59711V7.63394C11.7221 9.08375 10.552 10.1996 9.14323 10.1996L5.89956 10.1996L3.22477 11.8158C2.63098 12.1746 1.87553 11.7439 1.87553 11.0465V10.1039C0.80106 9.80444 0 8.83351 0 7.63394V2.59711Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.791 6.16224H13.5976C14.6766 6.16224 15 7.04313 15 8.12976V11.4877C15 12.3246 14.4811 13.0394 13.7497 13.3238L13.7498 14.2185C13.7498 14.8278 13.0897 15.205 12.571 14.8915C12.5471 14.8771 12.5241 14.8612 12.5021 14.8441L10.7219 13.4554L8.14925 13.4552C7.63811 13.4552 7.14097 13.2177 6.82066 12.8349C6.7091 12.7016 6.61461 12.5453 6.5507 12.3689C6.41758 12.0014 6.42883 11.2532 6.42883 11.2532H9.14323C11.2532 11.2532 12.791 9.84656 12.791 7.63394V6.16224Z" fill="white" />
                        </svg></div>
                        <div>
                            <h2 className="font-bold text-[12px] capitalize">
                                {isDisabled} comments{" "}
                            </h2>
                            <p className="font-[300] text-[11px] normal-case">
                                allow or disallow members to comment on this post.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="flex items-start gap-3">
                        {/* <FaTrash size={15} className="mt-1" /> */}
                        <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M5.41299 0.226972C5.71673 -0.0753691 6.20919 -0.0753692 6.51293 0.226972L8.58701 2.29149C8.89075 2.59383 8.89075 3.08402 8.58701 3.38637L6.51293 5.45088C6.20919 5.75322 5.71673 5.75322 5.41299 5.45088C5.10925 5.14854 5.10925 4.65835 5.41299 4.35601L6.15931 3.61312L4.40741 3.61312C2.83237 3.61312 1.55556 4.88406 1.55556 6.45183L1.55556 9.00022C1.55556 9.4278 1.20733 9.77441 0.777777 9.77441C0.348223 9.77441 -2.8728e-07 9.4278 -3.0597e-07 9.00022L-4.17364e-07 6.45183C-5.23273e-07 4.0289 1.97326 2.06473 4.40741 2.06473L6.15931 2.06473L5.41299 1.32185C5.10925 1.01951 5.10925 0.529314 5.41299 0.226972Z" fill="white" />
                            <path d="M4 13L4 8L5.5 8L5.5 13C5.5 13.8284 6.17157 14.5 7 14.5L12 14.5C12.8284 14.5 13.5 13.8284 13.5 13L13.5 8C13.5 7.17157 12.8284 6.5 12 6.5L10 6.5L10 5L12 5C13.6569 5 15 6.34314 15 8L15 13C15 14.6569 13.6569 16 12 16L7 16C5.34315 16 4 14.6569 4 13Z" fill="white" />
                        </svg></div>
                        <div>
                            <h2 className="font-bold text-[12px] capitalize">
                                open post in new tab{" "}
                            </h2>
                            <p className="font-[300] text-[11px] normal-case">
                                view this post in new tab.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="flex items-start gap-3">
                        {/* <FaTrash size={15} className="mt-1" /> */}
                        <div className="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                                <path d="M9.06723 0C10.3293 0 11.2759 1.15465 11.0284 2.39223L10.701 4.02898C10.6046 4.51101 10.6891 5.01166 10.9384 5.43536L12.733 8.48583C13.5174 9.8191 12.5561 11.5 11.0092 11.5L7.46175 11.5L7.29126 15.2508C7.2722 15.67 6.92681 16 6.5072 16C6.08759 16 5.7422 15.67 5.72315 15.2508L5.55266 11.5L2.00304 11.5C0.456229 11.5 -0.505089 9.81927 0.27914 8.486L2.07492 5.43298C2.32412 5.00932 2.40858 4.50873 2.31219 4.02676L1.98528 2.39223C1.73777 1.15465 2.68435 0 3.94644 0H9.06723Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-bold text-[12px] capitalize">pin post</h2>
                            <p className="font-[300] text-[11px] normal-case">
                                pin this post to the top of your profile.
                            </p>
                        </div>
                    </a>
                </li>
                <li onClick={() => window.my_modal_5.showModal()}>
                    <a className="flex items-start gap-3">
                        <FaBolt size={15} className="mt-1" />

                        <div>
                            <h2 className="font-bold text-[12px] capitalize">boost post</h2>
                            <p className="font-[300] text-[11px] normal-case">
                                add this post from the boosted list.
                            </p>
                        </div>
                    </a>
                </li>
                <dialog id="my_modal_5" className="modal">
                    <form method="dialog" className="modal-box modal-bg w-full flex-col">
                        <div className=" w-full  text-start text-white normal-case space-y-4">
                            <h3 className="font-bold text-lg text-white text-start flex items-center">
                                <FaBolt /> <span>Boost Post</span>
                            </h3>
                            <p>
                                Each boost will give you 1000 views. You can boost your post
                                however many boosts you have.
                            </p>
                            <p>
                                Be sure to use up all your boosts before the month ends, the
                                boosts reset every 30 days.
                            </p>
                        </div>
                        <div className="flex items-start justify-between gap-5 pt-3">
                            <div className="flex flex-col">
                                <button className="btn-border rounded-lg text-white px-4">
                                    Boosts Left
                                </button>
                                <button className="btn-border rounded-lg text-white flex items-center justify-center py-7">
                                    <FaBolt></FaBolt> 12
                                </button>
                            </div>
                            <div className=" space-y-3">
                                <div className="flex items-start gap-3">
                                    <h2 className="font-bold text-white mt-3">Days Left</h2>
                                    <div className="items-center flex justify-between text-white gap-3">
                                        <div className="flex flex-col">
                                            <span className="btn-border rounded-full">29</span>
                                            <span>days</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="btn-border rounded-full">1</span>
                                            <span>hour</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="btn-border rounded-full">30</span>
                                            <span>minutes</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="btn-border rounded-full">2</span>
                                            <span>seconds</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-border rounded text-white mb-2">
                                    <p>how many times would you like to boost this post? </p>
                                </div>
                                <input
                                    type="number"
                                    placeholder="Type amount"
                                    name=""
                                    id=""
                                    className="py-1 px-2 bg-[#00072D] rounded w-full text-white"
                                />
                                <div className="flex items-center gap-2 justify-end py-3">
                                    <button className="btn-border text-white">Close</button>
                                    <button className="btn-border text-white">Boost</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </dialog>
            </ul>
        </div>
    );
};

export default MoreInfo;