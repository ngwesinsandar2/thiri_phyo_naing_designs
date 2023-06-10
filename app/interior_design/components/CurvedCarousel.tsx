"use client";

// Import Swiper React components
import { SwiperSlide } from "swiper/react";

import image_10 from "../../../public/assets/images/image_10.png";
import image_12 from "../../../public/assets/images/image_12.png";
import image_13 from "../../../public/assets/images/image_13.png";
import image_14 from "../../../public/assets/images/image_14.png";
import image_15 from "../../../public/assets/images/image_15.png";
import image_16 from "../../../public/assets/images/image_16.png";
import image_17 from "../../../public/assets/images/image_17.png";
import image_18 from "../../../public/assets/images/image_18.png";
import SwiperSlider from "../../components/SwiperSlider";
import Image from "next/image";

const CurvedCarousel = () => {
  const items = [
    {
      id: 1,
      img_url: image_10,
    },
    {
      id: 2,
      img_url: image_12,
    },
    {
      id: 3,
      img_url: image_13,
    },
    {
      id: 4,
      img_url: image_14,
    },
    {
      id: 5,
      img_url: image_15,
    },
    {
      id: 6,
      img_url: image_16,
    },
    {
      id: 7,
      img_url: image_17,
    },
    {
      id: 8,
      img_url: image_18,
    },
  ]

  return (
    <>
      <div className="before:-left-[1px] after:-left-[1px] before:rounded-[50%] before:z-[2] before:-translate-y-[50%] before:block before:absolute before:bg-white before:w-full before:h-[100px] after:rounded-[50%] after:-translate-y-[50%] after:block after:absolute after:bg-white after:w-full after:h-[100px] after:z-[2]">
        <SwiperSlider>
          {
            items.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <Image
                    src={item.img_url}
                    alt="Interior Designs"
                    width={300}
                    height={360}
                  />
                </SwiperSlide>
              )
            })
          }
        </SwiperSlider>
      </div>
    </>
  );
}

export default CurvedCarousel;