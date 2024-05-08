import React from "react";
import IconEmail from "../../assets/icn-newsletter-mail.svg";
import IconBtnSend from "../../assets/icn-btn-send.svg";
import BgModal from "../../assets/bg-modal.jpg";

function Modal({isOpen}) {
  if (!isOpen) {
    return null; // Se isOpen for false, o modal não será renderizado
  }

  return (
    <>
      <div class="flex flex-row">
        <div class="hidden lg:block w-full">
          <img src={BgModal} class="block w-full" alt="Bem vindo, cadastre-se"/>
        </div>
        <div class="flex flex-col items-center justify-center bg-primary w-full h-full text-center">
          {/* <img src={`/maeztra-layout${IconEmail}`} alt="Icone Email" class="w-full h-auto min-w-[20px] min-h-[24px] max-w-[24px] lg:max-w-[14px]" /> */}
          <img class="w-full h-auto min-w-[20px] min-h-[24px] max-w-[24px] lg:max-w-[14px]" src={IconEmail} alt="Email"/>

          <h6 class="uppercase font-normal text-xs text-textTertiary">
            Bem vindo à MAEZTRA
          </h6>

          <p class="text-textQuartiary font-normal text-sm">
            Receba em Primeira mão
            <strong class="block w-full font-bold leading-6">
              descontos e ofertas exclusivas
            </strong>
          </p>

          <form action="" class="flex flex-col items-center justify-center w-full h-fit">
            <input type="text" placeholder="Digite seu e-mail" class="rounded-[10px] lg:rounded-xl w-full" />

            <button class="bg-base rounded-[10px] lg:rounded-xl w-full p-4 py-2 flex items-center justify-center">
              <span class="text-primary font-bold text-xs uppercase">
                Enviar
              </span>
              {/* <img src={`/maeztra-layout${IconBtnSend}`} alt="" class="w-full h-auto min-w-[20px] min-h-[24px] max-w-[24px] lg:max-w-[14px]" /> */}
              <img class="w-full h-auto min-w-[20px] min-h-[24px] max-w-[24px] lg:max-w-[14px]" src={IconBtnSend} alt=""/>
            </button>
          </form>

        </div>
      </div>
    </>
  );
}

export default Modal;
