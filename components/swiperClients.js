'use client'
import Product1Image from '../public/product-1.png'
import Product2Image from '../public/product-2.png'
import Product3Image from '../public/product-3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataClients = [
  { src: Product1Image },
  { src: Product2Image },
  { src: Product3Image }
]

const swiperClients = () => {
  return (
    <div className="swiper-clients">
      <Image
        src={'/icon-arrow.png'}
        className="swiper-button-next control-button"
        width={36}
        height={36}
        quality={100}
        alt=""
      />
      <Swiper
        navigation={{
          prevEl: '.swiper-clients .swiper-button-prev',
          nextEl: '.swiper-clients .swiper-button-next'
        }}
        modules={[Navigation]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 40
          }
        }}
        className="mySwiper"
      >
        {swiperDataClients.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="clients-box">
              <Image
                className="clients-img"
                src={slide.src}
                width={417}
                height={495}
                quality={100}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image
        src={'/icon-arrow.png'}
        className="swiper-button-prev control-button"
        width={36}
        height={36}
        quality={100}
        alt=""
      />
    </div>
  )
}
export default swiperClients
