import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./styles.css"

import digBanner from "/Digital Web Banner Digi Pin - Eng.jpg"
import truck from "/simple_truck_01.png"
import { Button } from '../ui/button';

const HomeContainer= ()=>{
    return (
        <div className="w-full mt-10">
            <div className="w-full flex h-56 max-md:hidden">
                <div className="w-3/5 max-md:w-full  rounded-lg bg-gradient-to-l from-green-200 to-red-200 h-full mx-4 flex justify-around">
                     <div className='h-full flex items-center'>
                        <div className='flex flex-col gap-5 p-5'>
                            <div className='text-red-900 font-bold text-3xl'>
                                <h2>Welcome back</h2>
                                <h2>John doe</h2>
                            </div>
                            <div className='text-red-700 text-sm'>
                                <p>From letters to parcels we've got your shipping covered</p>
                            </div>
                            <div>
                                <Button variant="red">
                                    <p>Book now</p>
                                </Button>
                            </div>
                        </div>
                     </div>
                     <div className=''>
                        <img src={truck} alt="" className='w-full h-full object-contain py-6 px-6'/>
                     </div>
                </div>
                <div className="w-2/5 max-md:w-3/5   h-full  mx-4">
                    <img src={digBanner} alt="" className='w-full h-full rounded-2xl'/>
                </div>
            </div>
            <div className='md:hidden h-80 max-sm:h-64'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    onTouchMove={false}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="w-3/5 max-md:w-full  rounded-lg bg-gradient-to-l from-green-200 to-red-200 h-full sm:mx-4 flex">
                            <div className='h-full flex items-center'>
                                <div className='flex flex-col gap-3 p-5 flex-1'>
                                    <div className='text-red-900 font-bold text-2xl'>
                                        <h2>Welcome back,</h2>
                                        <h2>John doe</h2>
                                    </div>
                                    <div className='text-red-700 text-sm'>
                                        <p>From letters to parcels ,<br/> we've got your shipping covered</p>
                                    </div>
                                    <div>
                                        <Button variant="red">
                                            <p>Book now</p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex-1'>
                                <img src={truck} alt="" className='w-1/2 h-1/2 py-6 px-6'/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-2/5 max-md:w-full   h-full sm:mx-4">
                            <img src={digBanner} alt="" className='w-full h-full rounded-2xl'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeContainer