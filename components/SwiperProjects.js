'use client'
import Product1Image from '../public/product-1.png'
import Product2Image from '../public/product-2.png'
import Product3Image from '../public/product-3.png'
import Product4Image from '../public/product-4.jpeg'
import Product5Image from '../public/product-5.png'
import Product6Image from '../public/product-6.png'
import Product7Image from '../public/product-7.jpeg'
import Product8Image from '../public/packs.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataProjects = [
  { src: Product1Image },
  { src: Product2Image },
  { src: Product3Image },
  { src: Product4Image },
  { src: Product5Image },
  { src: Product6Image },
  { src: Product7Image },
  { src: Product8Image }
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
        slidesPerView={1}
        loop={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
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
              <Image className="project-img" src={slide.src} quality={100} alt="" />
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
