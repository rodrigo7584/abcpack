'use client'
import photoClient from '../public/photo-client.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Image from 'next/image'

const swiperDataClients = [
  {
    src: photoClient,
    comentary: `"Desde que começamos a usar as embalagens personalizadas ABC Pack, notamos um aumento significativo na satisfação dos clientes. A apresentação dos nossos pratos agora é impecável!"`,
    place: 'Restaurante Sabor & Arte',
    area: 'Restaurante'
  },
  {
    src: photoClient,
    comentary: `"Sempre muito bem atendida, produtos de extrema qualidade e sempre cumprem o prazo de entrega (quando não entregam antes do prazo rs). Quando o trabalho é bem feito, a gente tem ate gosto de recomendar"`,
    place: 'Amanda Mayume',
    area: 'Restaurante'
  },
  {
    src: photoClient,
    comentary: `"Desde que começamos a usar as embalagens personalizadas ABC Pack, notamos um aumento significativo na satisfação dos clientes. A apresentação dos nossos pratos agora é impecável!"`,
    place: 'Restaurante Sabor & Arte',
    area: 'Restaurante'
  },
  {
    src: photoClient,
    comentary: `"Sempre muito bem atendida, produtos de extrema qualidade e sempre cumprem o prazo de entrega (quando não entregam antes do prazo rs). Quando o trabalho é bem feito, a gente tem ate gosto de recomendar"`,
    place: 'Amanda Mayume',
    area: 'Restaurante'
  }
]

const SwiperClients = () => {
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
          prevEl: '.swiper-clients .swiper-button-next',
          nextEl: '.swiper-clients .swiper-button-prev'
        }}
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          }
          // 992: {
          //   slidesPerView: 3,
          //   spaceBetween: 40
          // }
        }}
        className="mySwiper"
      >
        {swiperDataClients.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="clients-box">
              {/* <div className="photo">
                <Image className="clients-img" src={slide.src} quality={100} alt="" />
              </div> */}
              <p className="text-comentary">{slide.comentary}</p>
              <h3 className="title-comentary">{slide.place}</h3>
              <p className="place">{slide.area}</p>
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
export default SwiperClients
