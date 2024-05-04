import React from "react";
import { MagnifyingGlass, List, Heart, User } from "@phosphor-icons/react";
import LogoImageMobile from "../../assets/logo-mobile.png";
import LogoImage from "../../assets/logo-maeztra.png";
import IconMinicart from "/icn-minicart.svg";
import IconUser from "/icn-user.svg";
import IconWishlist from "/icn-wishlist.svg";

function Header() {

  return (
    <>
    <header class="w-full h-auto block bg-primary">
        <div class="bg-secondary text-white font-normal bg-slate-700 py-1 text-xs lg:text-sm text-center">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </div>
        <div class="flex items-center justify-between w-full text-base container px-4 py-6 mx-auto">
          <div class="flex items-center gap-0">
            <div class="md:hidden p-2 cursor-pointer">
              <List size={24} />
            </div>
            <div class="px-3 w-max">
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
            <div class="flex items-center justify-start  p-2 cursor-pointer lg:w-full lg:ml-24 lg:mr-8 lg:max-w-[791px]">
              <input class="hidden lg:block w-full max-w-[672px] lg:bg-tertiary lg:rounded-r-none border-0 pl-6" type="text" placeholder="O Que Você busca?"/>
              <span class="hidden lg:block text-primary lg:bg-base lg:rounded-lg lg:min-w-[119px] text-center py-3 lg:-ml-2">
                Buscar
              </span>
              <MagnifyingGlass class="lg:hidden" color="#000000" size={24} />
            </div>

            {/* Minicart */}
            <div class="flex p-2 lg:p-0 cursor-pointer lg:min-w-[400px] justify-end">

              {/* login */}
              <div class="hidden lg:flex items-center justify-center">
                  <div class="flex items-center justify-center">
                    <div class="px-2 flex items-center justify-center">                    
                      <img src={IconUser} alt="Icone Usuário"/>        
                      {/* <User class="" color="#000000" size={24} /> */}
                      <span class="px-2 text-textPrimary text-sm">
                        Minha Conta
                      </span>
                    </div>
                    <div class="px-2 flex items-center justify-center">         
                      <img src={IconWishlist} alt="Icone Favoritos"/>
                      {/* <Heart color="#000000" size={24} /> */}
                      <span class="px-2 text-textPrimary text-sm">
                        Minha Conta
                      </span>
                    </div>
                  </div>
              </div>
              {/* Wishlist */}
              <div class="w-full flex items-center justify-center lg:border lg:border-base lg:rounded-lg lg:p-3 lg:py-[14px] lg:max-w-[140px]">
                <img class="w-full h-auto max-w-[24px]" src={IconMinicart} alt="Minicart"/>
                <span class="hidden lg:block ml-2 text-secondary text-sm">
                  Meu Carrinho
                </span>
              </div>

            </div>
          </div>
        </div>
    </header>
    </>
  );
}

export default Header;
