
import plus from '../../../../assets/Story/plus.png'
import img1 from '../../../../assets/Story/Rectangle 45.png'
import img from '../../../../assets/Story/Rectangle 42.png'
import './Story.css'
const PlusStory = () => {
    return (
        <div className="card md:w-[100px] w-[70px]  m-2  shadow-lg">
            <div className=''>
                <img src={img} className='w-full' alt="" />
            </div>
            <div className='absolute top-5 right-5'>
                <button><img src={plus} alt="" /></button>
            </div>
            <div className='text-center'>
                <p className='text-base text-white font-medium'>You</p>
            </div>

        </div>
    );
};

export default PlusStory;