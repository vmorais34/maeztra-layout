import React from "react";
import ProductSkirtOne from "../../assets/img-product-one.png";
import { returnBuyButton } from "./Shelf";

function Spot() {
  function handleBuyButton(event){
    event.preventDefault();

    console.log("toast")
    returnBuyButton();
  }

  return (
    <>
    <div class="container max-w-[308px] flex items-center justify-center mx-auto">
      <section class="bg-primary w-full h-auto block text-center py-6 pt-0 spot">
        <article class="w-full block">
          {/* Produção vai esse */}
          <img srcSet={`/maeztra-layout${ProductSkirtOne}`} alt="Saia marrom e blusa branca" class="w-full"/>
          {/* <img src={ProductSkirtOne} alt="Saia marrom e blusa branca" class="w-full"/> */}
        </article>
        <article class="w-full block text-left px-[30px] pt-2 pb-4">
          <div class="skuSelectorContainer flex flex-row items-center justify-start w-full mb-1">
            <div class="w-[27px] h-[27px] rounded border-none mr-2 bg-skuOne"></div>
            <div class="w-[27px] h-[27px] rounded border-none mr-2 bg-skuTwo"></div>
            <div class="w-[27px] h-[27px] rounded border-none mr-2 bg-skuThree"></div>
            <div class="w-[27px] h-[27px] rounded border-none bg-skuFour"></div>
          </div>
          <h4 class="text-textPrimary font-normal text-[20px] leading-[30px] m-1">
            R$ 500,00
          </h4> 
          <h3 class="text-textPrimary font-bold my-1 text-[16px] leading-[24px]">
            Faux Suede Mini Skirt
          </h3>
          <h5 class="text-textPrimary font-normal my-1 text-[12px] leading-[18px] opacity-50">
            A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
          </h5>
          <button onClick={handleBuyButton} class="text-primary focus:outline-none w-full transition-all bg-base hover:bg-base/90 hover:border-none border-none rounded font-normal text-[16px] leading-[24px] flex items-center justify-center h-[35px]">
            Adicionar
          </button>
        </article>
      </section>
    </div>
    </>
  );
}

export default Spot;
