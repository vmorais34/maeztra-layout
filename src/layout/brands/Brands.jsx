import React from "react";

import Slider from 'react-slick';
// import './slick.css';
import './slick-theme.css';

import BrandTaylor from "../../assets/brand-taylor.jpg";
import BrandMelissa from "../../assets/brand-melissa.jpg";
import BrandForever from "../../assets/brand-forever.jpg";
import BrandZara from "../../assets/brand-zara.jpg";
import BrandComma from "../../assets/brand-comma.jpg";

function Brands() {
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
    <section class="bg-primary w-full h-auto block text-center py-10 brands border-none">
      <h2 class="text-textPrimary font-bold mb-4 text-[30px] leading-[38px] lg:text-[32px] lg:leading-[48px]">
        Marcas Parceiras
      </h2>
      <div class="container mx-auto px-[30px] lg:p-0">
        <Slider {...settings}>
          <article class="w-full block">
            <img src={`/maeztra-layout${BrandComma}`} alt="Logo Comma" class="w-full"/>
            {/* <img src={BrandComma} alt="Logo Comma" class="w-full"/> */}
          </article>
          <article class="w-full block">
            {/* Produção vai esse */}
            <img src={`/maeztra-layout${BrandMelissa}`} alt="Logo Melissa" class="w-full"/>
            {/* <img src={BrandMelissa} alt="Logo Melissa" class="w-full"/> */}
          </article>
          <article class="w-full block">
            {/* Produção vai esse */}
            <img src={`/maeztra-layout${BrandForever }`} alt="Logo Forever" class="w-full"/>
            {/* <img src={BrandForever } alt="Logo Forever" class="w-full"/> */}
          </article>
          <article class="w-full block">
            {/* Produção vai esse */}
            <img src={`/maeztra-layout${BrandZara}`} alt="Logo Zara" class="w-full"/>
            {/* <img src={BrandZara} alt="Logo Zara" class="w-full"/> */}
          </article>
          <article class="w-full block">
            {/* Produção vai esse */}
            <img src={`/maeztra-layout${BrandTaylor}`} alt="Logo Taylor" class="w-full"/>
            {/* <img src={BrandTaylor} alt="Logo Taylor" class="w-full"/> */}
          </article>
        </Slider>
      </div>
    </section>
    </>
  );
}

export default Brands;
