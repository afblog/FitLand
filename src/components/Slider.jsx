import React, { useState } from 'react'
import SliderBox from './SliderBox';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

export default function Slider() {
    return (
        <>
            <div className='relative bg-Primary/8 py-8 flex items-center justify-center'>
                <img className='absolute w-25 xs:w-40 md:w-50 lg:w-52.5 top-0 left-0 right-0 mx-auto rotate-180' src="/images/Rectangle.svg" />
                <h1 className='absolute top-0 right-0 w-fit left-0 font-IRANSansXRegular sm:font-IRANSansXMedium text-sm xs:text-xl md:text-3xl mx-auto text-Secondary'>تخفیف ویژه</h1>
                <div className='container mx-auto px-6 md:px-4'>
                    <Swiper
                        slidesPerView={3}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },

                            460: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <SliderBox img="images/slide-img01.svg" title="سویشرت نایک مدل AQ-14" price="300,000" size="از سایز L تا XXL" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderBox img="images/slide-img02.svg" title="ست نایک مدل S-۲۰۰۰" price="200,000" size="از سایز L تا XXL" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderBox img="images/slide-img03.svg" title="کفش نایک مدل S-۲۰۰۰" price="200,000" size="از سایز L تا XXL" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SliderBox img="images/slide-img04.svg" title="اسکوتر مدل A-155" price="300,000" size="از سایز ۱۰ تا ۱۴" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}