import React from "react";
import { MagnifyingGlass, List } from "@phosphor-icons/react";
import LogoImageMobile from "../../assets/logo-mobile.png";
import LogoImage from "../../assets/logo-maeztra.png";
import IconMinicart from "../../assets/icn-minicart.svg";
import IconUser from "../../assets/icn-user.svg";
import IconWishlist from "../../assets/icn-wishlist.svg";
import IconMenuDress from "../../assets/icn-menu-dress.svg";

function Header() {

  return (
    <>
    <header class="w-full h-auto block bg-primary">
        <div class="bg-secondary text-white font-normal bg-slate-700 py-1 text-xs lg:text-sm text-center">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </div>
        <div class="shadow-smMenu w-full">
          <div class="flex items-center justify-between w-full text-base container px-4 py-6 lg:py-5 mx-auto">
            <div class="flex items-center gap-0">
              <div class="md:hidden p-0 cursor-pointer">
                <List size={24} />
              </div>
              <div class="p-2 px-3 w-max h-10 flex items-center justify-center">
                <h1 class="leading-none">
                  <a class="block" href="/">
                    <picture>
                      <source media="(min-width:650px)" srcset={LogoImage} />
                      <img src={LogoImageMobile} alt="Logo Maeztra"/>
                    </picture>
                  </a>
                </h1>
              </div>
            </div>

            <div class="flex items-center justify-between lg:w-full">
              <div class="flex items-center justify-start pr-[10px] p-2 cursor-pointer lg:w-full lg:ml-24 lg:mr-8 lg:max-w-[791px]"> 
                <input class="hidden lg:block w-full max-w-[672px] py-2 lg:bg-tertiary lg:rounded-r-none border-0 pl-6" type="text" placeholder="O Que Você Busca?"/>
                <span class="hidden lg:block text-primary lg:bg-base lg:rounded-lg lg:min-w-[119px] text-center py-2 lg:-ml-2">
                  Buscar
                </span>
                <MagnifyingGlass class="lg:hidden min-w-[32px] min-h-[32px]" color="#000000" size={24} />
              </div>

              {/* Minicart */}
              <div class="flex p-2 lg:p-0 cursor-pointer lg:min-w-[400px] justify-end">

                {/* login */}
                <div class="hidden lg:flex items-center justify-center">
                    <div class="flex items-center justify-center">
                      <div class="px-2 flex items-center justify-center">                    
                        <img src={`/maeztra-layout${IconUser}`} alt="Icone Usuário" class="w-full h-auto max-w-[14px]"/>
                        {/* <img src={IconUser} alt="Icone Favoritos" class="w-full h-auto max-w-[14px]"/> */}
                        <span class="px-2 text-textPrimary text-sm">
                          Minha Conta
                        </span>
                      </div>
                      <div class="px-2 flex items-center justify-center">         
                        <img src={`/maeztra-layout${IconWishlist}`} alt="Icone Favoritos" class="w-full h-auto max-w-[19px]"/>
                        {/* <img src={IconWishlist} alt="Icone Favoritos"  class="w-full h-auto max-w-[19px]"/> */}
                        <span class="px-2 text-textPrimary text-sm">
                          Minha Conta
                        </span>
                      </div>
                    </div>
                </div>
                {/* Cart */}
                <div class="w-full flex items-center justify-center pl-[10px] p-2  lg:border lg:border-base lg:rounded-lg lg:p-3 lg:py-[14px] lg:max-w-[140px]">
                  <img src={`/maeztra-layout${IconMinicart}`} alt="Icone Minicart" class="w-full h-auto min-w-[20px] min-h-[24px] max-w-[24px] lg:max-w-[14px]" />
                  {/* <img class="w-full h-auto min-w-[20px] min-h-[24px] max-w-[24px] lg:max-w-[14px]" src={IconMinicart} alt="Minicart"/> */}
                  <span class="hidden lg:block ml-2 text-secondary text-sm">
                    Meu Carrinho
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div class="hidden lg:block">
          <nav class="block container mx-auto">
            <ul class="flex w-full h-auto items-center justify-center">
              <li class="pr-[15px]">
                <a href="" class="flex items-center justify-center w-auto xl:min-w-[146px] font-bold text-base hover:text-base py-3">
                <img src={`/maeztra-layout${IconMenuDress}`} alt="Icone Menu Novidades" class="mr-2 w-full h-auto max-w-[14px]" />
                  {/* <img src={IconMenuDress} alt="Icone Menu Novidades" class="mr-2 w-full h-auto max-w-[14px]"/> */}
                  Novidades
                </a>
              </li>
              <li class="px-[15px]">
                <a href="" class="flex items-center justify-center w-auto xl:min-w-[146px] text-textPrimary hover:text-textPrimary py-3">
                  Vestidos
                </a>
              </li>
              <li class="px-[15px]">
                <a href="" class="flex items-center justify-center w-auto xl:min-w-[146px] text-textPrimary hover:text-textPrimary py-3">  
                  Roupas
                </a>
              </li>
              <li class="px-[15px]">
                <a href="" class="flex items-center justify-center w-auto xl:min-w-[146px] text-textPrimary hover:text-textPrimary py-3">  
                  Sapatos
                </a>
              </li>
              <li class="px-[15px]">
                <a href="" class="flex items-center justify-center w-auto xl:min-w-[146px] text-textPrimary hover:text-textPrimary py-3">  
                  Lingerie
                </a>
              </li>
              <li class="px-[15px]">
                <a href="" class="flex items-center justify-center w-auto xl:min-w-[146px] text-textPrimary hover:text-textPrimary py-3">  
                  Acessórios
                </a>
                </li>
                <li class="pl-[15px]">
                <a href="" class="flex items-center justify-center w-auto xl:min-w-[146px] uppercase text-textPrimary hover:text-textPrimary py-3">  
                  Outlet
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </header>
    </>
  );
}

export default Header;
