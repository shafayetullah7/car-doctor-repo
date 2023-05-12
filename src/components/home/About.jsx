import img1 from '../../assets/about_us/person.jpg';
import img2 from '../../assets/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero" id='about-us'>
            <div className="hero-content w-full h-full p-0 flex-col lg:flex-row gap-20">
                <div className='w-full h-full relative'>
                    <img src={img1} className='w-[88%] h-[88%] object-cover object-left rounded-xl' alt="" />
                    <img src={img2} className='absolute w-[230px] h-[230px] object-cover object-center rounded-xl border-[8px] border-white bottom-0 right-0' alt="" />
                </div>
                <div className='w-full'>
                    <p className='text-[#ff3811] text-xl font-semibold'>About Us</p>
                    <h1 className="text-5xl font-bold mt-5">Quality Car Servicing and Repairs</h1>
                    <p className="py-6 text-sm text-gray-700">At Car Doctor, we are dedicated to providing quality car servicing and repairs to keep your vehicle running smoothly. Our team of experienced professionals are committed to delivering exceptional customer service, using the latest technology and equipment to ensure that your car is always in top condition.<br/><br/>

                    Whether you need routine maintenance services like oil changes and tire rotations, or more complex repairs like engine diagnostics and transmission replacements, we have the expertise and resources to get the job done right. We pride ourselves on using only high-quality parts and materials to ensure that your car is running safely and efficiently.
                    </p>
                    <button className="btn bg-[#ff3811] border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;