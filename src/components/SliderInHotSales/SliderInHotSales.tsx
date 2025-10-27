
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { ShoppingCart } from 'lucide-react';
import { Products } from '../../Products/Products';
export default function SliderInHotSales() {
    return (
        <>
            <Swiper
                autoplay={{ delay: 3000 }}
                spaceBetween={9}
                pagination={true}
                modules={[Pagination, Autoplay]}
                id="Swiperr"
                className="mySwiper rounded-xl mx-auto"
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    1080: {
                        slidesPerView: 5,
                    },
                }}
            >

                {Products.filter(p => p.isHot).map((p) => (
                    <SwiperSlide >
                        <div key={p.id} className=" bg-[#fff] rounded-lg flex flex-col  shadow-xl h-[300px] lg:h-[520px]">
                            <img src={p.image} className="rounded-t-lg max-h-[130px]  lg:max-h-[350px] " />
                            <div className=" !p-1 flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h3 className="text-[12px] lg:line-clamp-1 lg:text-[22px]">{p.title}</h3>
                                </div>
                                <span className="text-yellow-400 text-[12px] ">⭐{p.rating}</span>
                                <p className="text-gray-400 line-clamp-1 text-[12px]">{p.description}</p>
                                <div className="flex justify-between">
                                    <span className='text-[15px] text-gray-700'>{p.price} $</span>
                                    <ShoppingCart size={35} color="#fff" className='bg-[#FF5C8D] !p-2 rounded' />
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>))}
            </Swiper >

        </>
    );
}
