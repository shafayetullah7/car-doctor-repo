/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import img1 from '../../assets/carousel/1.jpg';
import img2 from '../../assets/carousel/2.jpg';
import img3 from '../../assets/carousel/4.jpg';

const Carousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper rounded-xl overflow-hidden"
            >
                <SwiperSlide>
                    <div className="hero min-h-[85vh] relative rounded-xl overflow-hidden" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 text-5xl font-bold">Expert Technicians for Your Car's Needs</h1>
                                <p className="mb-5">Our team of highly skilled technicians has years of experience in servicing a wide range of vehicles. Whether you need a routine oil change or major repairs, our experts will ensure your car is running smoothly and safely on the road..</p>
                                <button className="btn bg-[#ff3811] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[85vh] relative rounded-xl overflow-hidden" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 text-5xl font-bold">Comprehensive Services to Keep Your Car in Top Condition</h1>
                                <p className="mb-5">We offer a full range of services to keep your car in great shape, from regular maintenance like tire rotations and brake checks to more complex repairs like engine diagnostics and transmission replacements. We use state-of-the-art equipment and high-quality parts to ensure your car is always performing at its best.</p>
                                <button className="btn bg-[#ff3811] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-[85vh] relative rounded-xl overflow-hidden" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className="mb-5 text-5xl font-bold">Convenient and Affordable Car Servicing Options</h1>
                                <p className="mb-5">At our car servicing site, we understand that maintaining your vehicle can be time-consuming and expensive. That's why we offer flexible appointment scheduling, competitive pricing, and a variety of service packages to meet your specific needs and budget. Trust us to keep your car running smoothly without breaking the bank.</p>
                                <button className="btn bg-[#ff3811] border-none">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;