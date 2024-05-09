import React from "react";

import Slider from 'react-slick';
// import './slick.css';
import './slick-theme.css';

import TipBarGlobe from "../../assets/icn-tipbar-global.png";
import TipBarStocks  from "../../assets/icn-tipbar-stocks.png";
import TipBarChange from "../../assets/icn-tipbar-changes.png";
import TipBarOff  from "../../assets/icn-tipbar-off.png";
import TipBarShipping from "../../assets/icn-tipbar-free-shipping.png";

function Tipbar() {
  const settings = {
    dots: false,
    arrow: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
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
    <section class="bg-primary w-full h-auto block text-center pt-6 py-10 tipbar border-none">
      <h2 class="text-textPrimary font-bold mb-[21px] text-[16px] leading-[24px]">
         Por que comprar na Maeztra?
      </h2>
      <div class="container mx-auto overflow-hidden pl-[30px]">
        <Slider {...settings}>
          <div class="block">
            <article class="w-full flex-row items-center flex bg-tertiary rounded py-4 lg:px-8 px-5 h-16 max-w-[90%] lg:max-w-[370px]">
              <div class="flex">
                <img src={`/maeztra-layout${TipBarGlobe}`} alt="Produto importados" class="w-full"/>
                {/* <img src={TipBarGlobe} alt="Produto importados" class="w-full"/> */}
              </div>
              <div class="flex flex-col items-start justify-start ml-4"> 
                <span class="text-sm text-textPrimary"><strong>Produtos importados</strong></span>
                <span class="text-xs text-textQuintiary text-left">Produto  de Alta Qualidade</span>
              </div>
            </article>
          </div>

          <div class="block">
            <article class="w-full flex-row items-center flex bg-tertiary rounded py-4 lg:px-8 px-5 h-16 max-w-[90%] lg:max-w-[370px]">
              <div class="block">
                <img src={`/maeztra-layout${TipBarStocks}`} alt="Estoque no Brazil" class="w-full"/>
                {/* <img src={TipBarStocks} alt="Estoque no Brazil" class="w-full"/> */}
              </div>
              <div class="flex flex-col items-start justify-start ml-4">
                <span class="text-sm text-textPrimary"><strong>Estoque no Brazil</strong></span>
                <span class="text-xs text-textQuintiary text-left">Produtos mais perto de você!</span>
              </div>
            </article>
          </div>
          <div class="block">
            <article class="w-full flex-row items-center flex bg-tertiary rounded py-4 lg:px-8 px-5 h-16 max-w-[90%] lg:max-w-[370px]">
              <div class="block">
                <img src={`/maeztra-layout${TipBarChange}`} alt="Trocas Garantidas" class="w-full"/>
                {/* <img src={TipBarChange} alt="Trocas Garantidas" class="w-full"/> */}
              </div>
              <div class="flex flex-col items-start justify-start ml-4">
                <span class="text-sm text-textPrimary"><strong>Trocas Garantidas</strong></span>
                <span class="text-xs text-textQuintiary text-left">Troca em até 48 horas, veja as regras</span>
              </div>
            </article>
          </div>
          <div class="block">
            <article class="w-full flex-row items-center flex bg-tertiary rounded py-4 lg:px-8 px-5 h-16 max-w-[90%] lg:max-w-[370px]">
              <div class="block">
                <img src={`/maeztra-layout${TipBarOff}`} alt="Ganhe 5% off" class="w-full"/>
                {/* <img src={TipBarOff} alt="Ganhe 5% off" class="w-full"/> */}
              </div>
              <div class="flex flex-col items-start justify-start ml-4">
                <span class="text-sm text-textPrimary"><strong>Ganhe 5% off</strong></span>
                <span class="text-xs text-textQuintiary text-left">Pagando à vista no Cartão</span>
              </div>
            </article>
          </div>
          <div class="block">
          <article class="w-full flex-row items-center flex bg-tertiary rounded py-4 lg:px-8 px-5 h-16 max-w-[90%] lg:max-w-[370px]">
                <div class="block">
                  <img src={`/maeztra-layout${TipBarShipping}`} alt="Frete Grátis" class="w-full"/>
                  {/* <img src={TipBarShipping} alt="Frete Grátis" class="w-full"/> */}
                </div>
                <div class="flex flex-col items-start justify-start ml-4">
                  <span class="text-sm text-textPrimary"><strong>Frete Grátis</strong></span>
                  <span class="text-xs text-textQuintiary text-left">Em compras acima de R$ 499,00</span>
                </div>
              </article>
          </div>
        </Slider>
      </div>
    </section>
    </>
  );
}

export default Tipbar;
