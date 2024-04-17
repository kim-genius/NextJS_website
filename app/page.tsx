'use client'
import useStore from '../store'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';

export default function Home() {
  const mode = useStore((state)=>state.mode)

  const imageLoader = () => {
    return "https://imgscf.slidemembers.com/docs/1/1/319/orange_yellow_color_artwall_mockup_presentation_318547.jpg"
  }
  const imageLoader2 = () => {
    return "https://imgscf.slidemembers.com/docs/1/1/319/orange_yellow_color_artwall_mockup_presentation_318550.jpg"
  }
  const imageLoader3 = () => {
    return "https://imgscf.slidemembers.com/docs/1/1/319/orange_yellow_color_artwall_mockup_presentation_318554.jpg"
  }

  return (
    <main className ={`${mode? "bg-blue w-full h-1/2":"w-full bg-black"}`}>
      <Swiper
      spaceBetween={50}
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      navigation
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={1}
      >
      <SwiperSlide  >
      <Image className="bg-cover"  width={2000} height={2000} loader={imageLoader} src="me.png" alt=''></Image>
      </SwiperSlide>
      <SwiperSlide >
      <Image  className="bg-cover"  width={2000} height={2000} loader={imageLoader2} src="me.png" alt=''></Image>
      </SwiperSlide>
      <SwiperSlide>
      <Image   className="bg-cover"  width={2000} height={2000} loader={imageLoader3} src="me.png" alt=''></Image>
      </SwiperSlide>
    </Swiper>
 

    </main>
  );
}
