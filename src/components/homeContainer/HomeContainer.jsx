import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./styles.css"

const HomeContainer= ()=>{
    return (
        <div className="w-full mt-10">
            <div className="w-full flex h-56 max-md:hidden">
                <div className="w-3/5 max-md:w-full  rounded-lg bg-gradient-to-l from-green-200 to-red-200 h-full mx-4">
                     
                </div>
                <div className="w-2/5 max-md:w-3/5 rounded-2xl  h-full bg-gray-200 mx-4">
                    image
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
                        <div className="w-3/5 max-md:w-full  rounded-lg bg-gradient-to-l from-green-200 to-red-200 h-full sm:mx-4">
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-2/5 max-md:w-full rounded-2xl  h-full bg-gray-200 sm:mx-4">
                            image
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeContainer