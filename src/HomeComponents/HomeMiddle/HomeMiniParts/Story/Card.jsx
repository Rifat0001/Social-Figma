import React from 'react';
import img1 from '../../../../assets/Story/Rectangle 45.png'
import './Story.css'
const Card = () => {
    return (
        <div className="card md:w-[100px]   m-2  shadow-lg">
            <img className='str-img p-1 w-full' src={img1} alt="" />
            <div className='text-center'>
                <p className='text-xs text-white'>Anza Madni</p>
                <p className='profile-user'>@Anza_Madni</p>
            </div>
        </div>
    );
};

export default Card;