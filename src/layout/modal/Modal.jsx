import React, { useState } from "react";
import IconEmail from "../../assets/icn-newsletter-mail.svg";
import IconBtnSend from "../../assets/icn-btn-send.svg";
import BgModal from "../../assets/bg-modal.jpg";
import { validarInput } from "../newsletter/Newsletter";
import Overlay from "./Overlay";

function Modal({isOpen, setIsModalOpen}) {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState(null);

  if (!isOpen) {
    return null;
  }

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleOnClick(event){
    event.preventDefault();

    console.log("Email", email)
    const erro = validarInput(email);
    if (erro) {
      setErro(erro);
      // setSuccess(null)
    } else {
      setErro(null);
      // setSuccess("Email cadastrado com sucesso")
      setIsModalOpen(false)
      console.table("email", email)
    }
  }

  function handleCloseModal(event){
    event.preventDefault();
    setIsModalOpen(false)
  }

  return (
    <>
      <Overlay />
      <div class="fixed w-[85%] lg:w-full lg:max-w-[848px] h-auto bg-primary z-[11] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="flex flex-row items-center relative py-6 pt-[40px] lg:p-0">
          <div class="absolute top-0 right-0">
            {/* Tem outra fonte no btn */}
            <button class="text-primary uppercase text-sm font-normal px-0 relative -top-8 border-none outline-none focus-within::outline-none hover:border-none focus:outline-none bg-[transparent]" onClick={handleCloseModal}> Fechar </button>
          </div>
          <div class="hidden lg:block w-full">
            <img src={`/maeztra-layout${BgModal}`} class="block w-full" alt="Bem vindo, cadastre-se"/>
            {/* <img src={BgModal} class="block w-full" alt="Bem vindo, cadastre-se"/> */}
          </div>
          <div class="flex flex-col items-center justify-center lg:px-12 px-[20px] w-full h-full text-center">
            <img src={`/maeztra-layout${IconEmail}`} alt="Icone Email" class="w-full h-auto min-w-[24px] min-h-[20px] max-w-[24px]" />
            {/* <img class="w-full h-auto min-w-[24px] min-h-[20px] max-w-[24px]" src={IconEmail} alt="Email"/> */}

            <h6 class="uppercase font-normal text-xs text-textTertiary mt-3">
              Bem vindo à MAEZTRA
            </h6>

            <p class="text-textDefault font-normal text-sm mt-3 mb-6">
              Receba em Primeira mão
              <strong class="block w-full font-bold leading-6">
                descontos e ofertas exclusivas
              </strong>
            </p>

            <form action="" class="flex flex-col items-center justify-center w-full h-fit relative">
              <input type="text" onChange={handleInput} placeholder="Digite seu e-mail" class="text-sm placeholder:text-xs placeholder:text-textPrimary rounded-[10px] lg:rounded-xl w-full mb-[12.5px] px-3 py-[9px] border-[#C4C4C4] focus:border-solid focus:border-secondary focus:border-[1px] focus-within:border-secondary" />

              <button class="bg-base rounded-[10px] lg:rounded-xl w-full p-4 py-[9px] flex items-center justify-center hover:border-base focus:outline-none" onClick={handleOnClick}>
                <span class="text-primary font-bold text-xs uppercase">
                  Enviar
                </span>
                <img src={`/maeztra-layout${IconBtnSend}`} alt="" class="w-full h-auto min-w-[12px] min-h-[20px] max-w-[24px] lg:max-w-[12px] ml-2" />
                {/* <img class="w-full h-auto min-w-[12px] min-h-[20px] max-w-[24px] lg:max-w-[12px] ml-2" src={IconBtnSend} alt=""/> */}
              </button>
              {erro && <p class="text-[#FA1400] font-bold text-[10px] leading-[16px] lg:text-sm lg:leading-6 lg:absolute lg:bottom-[-24px] left-0" >{erro}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
