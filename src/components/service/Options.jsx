import { Outlet } from 'react-router-dom';
import banner from '../../assets/common_banner_img.png';

const Options = () => {
    return (
        <div>
            <div className=' w-full h-fit relative rounded-xl overflow-hidden'>
                <img className='w-full' src={banner} alt="" />
                <h1 className='text-5xl absolute top-1/2 -translate-y-1/2 left-24 font-bold text-white z-10'>Service</h1>
                <div className='h-full absolute top-0 w-full bg-gradient-to-r from-black via-gray-700 to-transparent opacity-50 z-0'></div>
            </div>
            <div className='my-32'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Options;