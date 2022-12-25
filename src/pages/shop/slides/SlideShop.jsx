import React from 'react'
import './SlideShop.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';

import slide1 from '../slides/slide1.webp'
import slide2 from '../slides/slide2.webp'
import slide3 from '../slides/slide3.webp'
import slide4 from '../slides/slide4.webp'
import slide5 from '../slides/slide5.webp'
import slide6 from '../slides/slide6.webp'

const SlideShop = () => {
    SwiperCore.use([Autoplay])
    return (
        <div className='slide-shop'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                grabCursor={true}
            >
                <SwiperSlide><img src={slide6} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide2} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide3} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide4} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide5} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slide1} alt=""/></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SlideShop