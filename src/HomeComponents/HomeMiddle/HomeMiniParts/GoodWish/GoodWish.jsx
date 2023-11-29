import wish from '../../../../assets/Story/u.png'
import cross from '../../../../assets/Story/cross.png'
import './GoodWish.css'
const GoodWish = () => {
    return (
        <div className='bg-[#0A123E] flex items-center wish justify-between give-post md:mx-6 mx-3 mt-6 relative md:px-6 px-3 md:py-6 py-3'>
            <div>
                <p className='md:text-lg text-md text-white font-normal'>Good Morning, Oblivion Isme</p>
                <p className=' md:text-lg text-sm text-white font-light'>Every new day is a chance to change your life. </p>
            </div>
            <div>
                <img className='md:w-full w-16 md:me-0 me-3' src={wish} alt="" />
            </div>
            <img src={cross} className='absolute right-2 top-3' alt="" />
        </div>
    );
};

export default GoodWish;