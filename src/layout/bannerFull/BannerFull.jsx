import React from "react";
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './slick.css';
import './slick-theme.css';
import srcBannerFull from "../../assets/bannerFull.png";
import BannerFullMobile from "../../assets/bannerFull-mobile.png";



function BannerFull() {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <section class="w-full h-auto block mx-auto">
      {/* Slider */}
      <Slider {...settings}>
        {/* Slide */}
        <div class="flex w-full flex-col lg:items-center relative">
          <article class="w-full block">
            <picture>
              {/* Produção vai esse */}
              <source media="(min-width:1024px)" srcSet={`/maeztra-layout${srcBannerFull}`} />
              <source media="(min-width:640px)" srcSet={`/maeztra-layout${srcBannerFull}`} />
              <img src={`/maeztra-layout${BannerFullMobile}`} alt="Logo Maeztra" class="w-full"/>
              {/* <source media="(min-width:1024px)" srcSet={srcBannerFull} />
              <source media="(min-width:640px)" srcSet={srcBannerFull} />
              <img src={BannerFullMobile} alt="Logo Maeztra" class="w-full"/> */}
            </picture>
          </article>
          <article class="text-primary absolute container pr-12 lg:pr-0 mx-auto max-w-[70%] sm:max-w-[75%] md:max-w-[80%] lg:max-w-[768px] xl:max-w-[1026px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h6 class="text-[30px] leading-[38px] mb-3 lg:mb-0 lg:text-[40px] lg:leading-[48px] font-bold">Promoções de Outono</h6>
            <p class="text-base text-primary text-sm leading-[17px] lg:leading-6 lg:text-xl mt-3 mb-4 lg:mt-10 lg:mb-8 font-normal">
              Confiras os melhores looks para combinar com você nesse Outono 
            </p>
            <a href="#" class="block w-max bg-base text-base text-primary hover:text-primary rounded-[4px] font-bold leading-[16px] lg:leading-[24px] px-3 py-2 lg:px-9 lg:py-3">
              Conferir
            </a>
          </article>
        </div>

        {/* Outros slides */}
        <div class="flex w-full flex-col lg:items-center relative">
          <article class="w-full block">
            <picture>
              {/* Produção vai esse */}
              <source media="(min-width:1024px)" srcSet={`/maeztra-layout${srcBannerFull}`} />
              <source media="(min-width:640px)" srcSet={`/maeztra-layout${srcBannerFull}`} />
              <img src={`/maeztra-layout${BannerFullMobile}`} alt="Logo Maeztra" class="w-full"/>
              {/* <source media="(min-width:1024px)" srcSet={srcBannerFull} />
              <source media="(min-width:640px)" srcSet={srcBannerFull} />
              <img src={BannerFullMobile} alt="Logo Maeztra" class="w-full"/> */}
            </picture>
          </article>
          <article class="text-primary absolute container pr-12 lg:pr-0 mx-auto max-w-[70%] sm:max-w-[75%] md:max-w-[80%] lg:max-w-[768px] xl:max-w-[1026px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h6 class="text-[30px] leading-[38px] mb-3 lg:mb-0 lg:text-[40px] lg:leading-[48px] font-bold">Promoções de Outono</h6>
            <p class="text-base text-primary text-sm leading-[17px] lg:leading-6 lg:text-xl mt-3 mb-4 lg:mt-10 lg:mb-8 font-normal">
              Confiras os melhores looks para combinar com você nesse Outono 
            </p>
            <a href="#" class="block w-max bg-base text-base text-primary hover:text-primary rounded-[4px] font-bold leading-[16px] lg:leading-[24px] px-3 py-2 lg:px-9 lg:py-3">
              Conferir
            </a>
          </article>
        </div>

        <div class="flex w-full flex-col lg:items-center relative">
          <article class="w-full block">
            <picture>
              {/* Produção vai esse */}
              <source media="(min-width:1024px)" srcSet={`/maeztra-layout${srcBannerFull}`} />
              <source media="(min-width:640px)" srcSet={`/maeztra-layout${srcBannerFull}`} />
              <img src={`/maeztra-layout${BannerFullMobile}`} alt="Logo Maeztra" class="w-full"/>
              {/* <source media="(min-width:1024px)" srcSet={srcBannerFull} />
              <source media="(min-width:640px)" srcSet={srcBannerFull} />
              <img src={BannerFullMobile} alt="Logo Maeztra" class="w-full"/> */}
            </picture>
          </article>
          <article class="text-primary absolute container pr-12 lg:pr-0 mx-auto max-w-[70%] sm:max-w-[75%] md:max-w-[80%] lg:max-w-[768px] xl:max-w-[1026px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h6 class="text-[30px] leading-[38px] mb-3 lg:mb-0 lg:text-[40px] lg:leading-[48px] font-bold">Promoções de Outono</h6>
            <p class="text-base text-primary text-sm leading-[17px] lg:leading-6 lg:text-xl mt-3 mb-4 lg:mt-10 lg:mb-8 font-normal">
              Confiras os melhores looks para combinar com você nesse Outono 
            </p>
            <a href="#" class="block w-max bg-base text-base text-primary hover:text-primary rounded-[4px] font-bold leading-[16px] lg:leading-[24px] px-3 py-2 lg:px-9 lg:py-3">
              Conferir
            </a>
          </article>
        </div>

      </Slider>
    </section>
    </>
  );
}

export default BannerFull;
