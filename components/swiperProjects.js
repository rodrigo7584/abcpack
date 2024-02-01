'use client'
import Product1Image from '../public/product-1.png'
import Product2Image from '../public/product-2.png'
import Product3Image from '../public/product-3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataProjects = [
  { src: Product1Image },
  { src: Product2Image },
  { src: Product3Image },
  { src: Product1Image }
]

const SwiperProjects = () => {
  return (
    <div className="swiper-project">
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
          prevEl: '.swiper-project .swiper-button-next',
          nextEl: '.swiper-project .swiper-button-prev'
        }}
        modules={[Navigation]}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        className="mySwiper"
      >
        {swiperDataProjects.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="project-box">
              <Image
                className="project-img"
                src={slide.src}
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
        width={30}
        height={30}
        quality={100}
        alt=""
      />
    </div>
  )
}
export default SwiperProjects
