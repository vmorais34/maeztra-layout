import React from "react";
import IconFacebook from "../../assets/icn-facebook.svg";
import IconLinkedin from "../../assets/icn-linkedin.svg";
import IconInstagram from "../../assets/icn-instagram.svg";
import IconYoutube from "../../assets/icn-youtube.svg";
import IconVisa from "../../assets/icn-visa.svg";
import IconMaster from "../../assets/icn-master.svg";
import IconVTEX from "../../assets/logo-vtex-gray.png";
import IconMaeztra from "../../assets/logo-maeztra-gray.png";

function Footer() {

  return (
    <>
    <footer class="w-full h-auto block bg-secondary border-t-[1px] border-tertiary">
      <div class="block">
        {/* Menu */}
        <div class="block w-full py-10 pb-[52px] bg-quartiary">
          <nav class="block px-8 lg:px-0 container mx-auto">
            <ul class="flex flex-col lg:flex-row items-center lg:items-start justify-center">
              <li class="flex flex-row lg:flex-col items-center justify-between w-full lg:justify-center">
                <a href="#" class="lg:w-full lg:text-center font-bold text-textPrimary text-base leading-[18px] hover:text-base hover:leading-[18px]">
                  Informações
                </a>
                <div class="lg:hidden text-textPrimary font-bold">
                  +
                </div>
                <ul class="hidden lg:block lg:mt-3 lg:pl-4">
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                    Quem Somos
                    </a>
                  </li>
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                    Prazo e Envio
                    </a>
                  </li>
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                    Trocas e Devoluções
                    </a>
                  </li>
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                    Promoções e Cupons
                    </a>
                  </li>
                </ul>
              </li>
              <li class="flex flex-row lg:flex-col items-center justify-between w-full lg:justify-center">
                <a href="#" class="lg:w-full lg:text-center font-bold text-textPrimary text-base leading-[18px] hover:text-base hover:leading-[18px]">
                  Minha Conta
                </a>
                <div class="lg:hidden text-textPrimary font-bold">
                  +
                </div>
                <ul class="hidden lg:block lg:mt-3 lg:pl-0 lg:min-w-[88px]">
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                    Minha Conta
                    </a>
                  </li>
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                     Meus Pedidos
                    </a>
                  </li>
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                    Cadastre-se
                    </a>
                  </li>
                </ul>
              </li>
              <li class="flex flex-row lg:flex-col items-center justify-between w-full lg:justify-center">
                <a href="#" class="lg:w-full lg:text-center font-bold text-textPrimary text-base leading-[18px] hover:text-base hover:leading-[18px]">
                  Onde nos Encontrar
                </a>
                <div class="lg:hidden text-textPrimary font-bold">
                  +
                </div>
                <ul class="hidden lg:block lg:min-w-[165px] lg:mt-3 lg:pl-4">
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                    Lojas
                    </a>
                  </li>
                  <li class="my-3 leading-none">
                    <a href="#" class="text-textPrimary text-xs hover:text-base hover:text-xs">
                      Endereço
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/* Copyright */}
        <div class="block w-full pt-6 pb-8 lg:pb-6 container mx-auto">
          <div class="flex items-center justify-between w-full flex-col lg:flex-row">
            <div class="mb-4 lg:mb-0 flex items-center justify-center w-full lg:w-auto">
              <ul class="list-none flex items-center justify-center">
                <li>
                  <a href="#" class="block w-auto px-3">
                    <img src={`/maeztra-layout${IconFacebook}`} class="w-full h-auto" alt="Facebook"/>
                    {/* <img src={IconFacebook} class="w-full h-auto" alt="Facebook" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" class="block w-auto px-3">
                    <img src={`/maeztra-layout${IconLinkedin}`} class="w-full h-auto" alt="Linkedin"/>
                    {/* <img src={IconLinkedin} class="w-full h-auto" alt="Linkedin" />               */}
                  </a>
                </li>
                <li>
                  <a href="#" class="block w-auto px-3">
                      <img src={`/maeztra-layout${IconInstagram}`} class="w-full h-auto" alt="Instagram"/>
                      {/* <img src={IconInstagram} class="w-full h-auto" alt="Instagram" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" class="block w-auto px-3">
                    <img src={`/maeztra-layout${IconYoutube}`} class="w-full h-auto" alt="Youtube"/>
                    {/* <img src={IconYoutube} class="w-full h-auto" alt="Youtube" /> */}
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-center w-full mt-4 mb-4 lg:m-0">
            <ul class="list-none flex items-center justify-center">
                <li>
                  <a href="#" class="block w-auto px-3">
                    <img src={`/maeztra-layout${IconMaster}`} class="w-full h-auto" alt="Master"/>
                    {/* <img src={IconMaster} class="w-full h-auto" alt="Master" />               */}
                  </a>
                </li>
                <li>
                  <a href="#" class="block w-auto px-3">
                    <img src={`/maeztra-layout${IconVisa}`} class="w-full h-auto" alt="Visa"/>
                    {/* <img src={IconVisa} class="w-full h-auto" alt="Visa" /> */}
                  </a>
                </li>
                <li>
                  <a href="#" class="block w-auto px-3">
                    <img src={`/maeztra-layout${IconMaster}`} class="w-full h-auto" alt="Master"/>
                    {/* <img src={IconMaster} class="w-full h-auto" alt="Master" />               */}
                  </a>
                </li>
                <li>
                  <a href="#" class="block w-auto px-3">
                    <img src={`/maeztra-layout${IconVisa}`} class="w-full h-auto" alt="Visa"/>
                    {/* <img src={IconVisa} class="w-full h-auto" alt="Visa" /> */}
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex items-center justify-center gap-5 w-full mt-4 lg:m-0 lg:w-auto">
              <div class="flex flex-col items-start lg:min-w-[68px] justify-between">
                <span class="block w-full text-xs mb-1">
                  Powered by                  
                </span>
                <img src={IconVTEX} class="w-full h-auto" alt="VTEX" />
              </div>
              <div class="flex flex-col items-start justify-between lg:min-h-[46px]">
                <span class="block w-full text-xs mb-1">
                  Develop by                  
                </span>
                <img src={IconMaeztra} class="w-full h-auto" alt="Maeztra" />
              </div>            
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
