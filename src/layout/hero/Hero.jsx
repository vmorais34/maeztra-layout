import React from "react";
import BannerHero from "../../assets/banner-hero.png";
import BannerHeroMobile from "../../assets/banner-hero-mobile.png";


function Hero() {

  return (
    <>
    <section class="w-full h-auto block container mx-auto">
      <div class="flex w-full flex-col lg:flex-row lg:items-center">
        <article class="text-textPrimary lg:max-w-[420px] lg:mr-16 mr-2">
          <h4 class="text-2xl font-bold mb-4">Lorem ipsum</h4>
          <p class="text-sm mb-6 pr-8 lg:pr-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque.
          </p>
        </article>
        <article class="w-full block">    
          <picture>          
            {/* Produção vai esse */}
            <source media="(min-width:650px)" srcSet={`/maeztra-layout${BannerHero}`} />
            <img src={`/maeztra-layout${BannerHeroMobile}`} alt="Nova Coleção de outono-inverno" class="w-full"/>

            {/* <source media="(min-width:650px)" srcSet={BannerHero} />
            <img src={BannerHeroMobile} alt="Nova Coleção de outono-inverno" class="w-full"/> */}
          </picture>
        </article>
      </div>
    </section>
    </>
  );
}

export default Hero;
