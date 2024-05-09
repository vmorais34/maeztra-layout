import React from "react";

import Slider from 'react-slick';
// import './slick.css';
import './slick-theme.css';
import Spot from "./Spot";
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function returnBuyButton(){
  if (toast) {
    toast("Item adicionado ao carrinho", {
      position: "bottom-right"
      // className: 'bg-[#44FA2F] rounded w-[300px] h-[40px] text-sm leading-6'
    });
  }
}

function Shelf() {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          draggable: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          draggable: true
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          draggable: true
        }
      }
    ]
  };

  return (
    <>
    <section class="bg-primary w-full h-auto block text-center pt-8 py-10 shelf border-none">
      <h2 class="text-textPrimary font-bold mb-4 text-[24px] leading-[36px] lg:text-[32px] lg:leading-[48px]">
        As Mais Pedidas
      </h2>
      <div class="container mx-auto px-[30px] lg:p-0">
        <Slider {...settings}>
          <article class="w-full block">
            <Spot  />
          </article>
          <article class="w-full block">
            <Spot />
          </article>
          <article class="w-full block">
            <Spot />
          </article>
          <article class="w-full block">
            <Spot />
          </article>
          <article class="w-full block">
            <Spot />
          </article>
        </Slider>
      </div>
    </section>
    <ToastContainer autoClose={4000} transition={Slide}/>
    </>
  );
}

export default Shelf;
