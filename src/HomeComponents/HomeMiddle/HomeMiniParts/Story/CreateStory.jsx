import img from '../../../../assets/Story/Rectangle 42.png'
import plus from '../../../../assets/Story/plus.png'
import img1 from '../../../../assets/Story/Rectangle 45.png'
import './Story.css'
const CreateStory = () => {
    return (
        <div className="card md:w-[100px] w-[61px]  shadow-lg">
            {/* <div >
                <img src={img} className='md:w-auto w-61px' alt="" />
            </div> */}
            <img className='str-img p-1 w-full' src={img1} alt="" />
            {/* <div className='absolute top-8 right-8'>
                <button><img src={plus} alt="" /></button>
            </div> */}
            <div className='text-center'>
                <p className='text-base text-white font-medium'>You</p>
            </div>

        </div>
    );
};

export default CreateStory;