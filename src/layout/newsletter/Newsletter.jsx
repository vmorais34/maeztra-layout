import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState(null);
  const [success, setSuccess] = useState(null);

  function validarInput(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verifica se o input está vazio
    if (input.trim() === '') {
      return "O campo está vazio.";
    }
  
    // Verifica se o input corresponde ao formato de email
    if (!emailRegex.test(input)) {
      return "Por favor, insira um endereço de email válido.";
    }
  
    // Retorna null se a validação passar
    return null;
  }
  
  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const erro = validarInput(email);
    if (erro) {
      setErro(erro);
      setSuccess(null)
    } else {
      setErro(null);
      setSuccess("Email cadastrado com sucesso")
      console.table("email", email)
    }
  }

  return (
    <>
    <section class="w-full h-auto block bg-quartiary border-t-[1px] border-tertiary">
      <div class="flex items-center lg:flex-row flex-col container justify-center py-6 lg:py-10 px-4 lg:px-0">
        <h5 class="lg:text-[#000] text-textPrimary font-bold lg:min-w-[307px] mb-2 lg:mx-0 lg:mr-[15px] text-2xl">
          Receba Nossa Newsletter
        </h5>
        <div class="hgroup relative">
            <form class="flex items-center justify-center" onSubmit={handleSubmit}>
              <input type="text" placeholder="Digite seu e-mail" onChange={handleChange} class="px-6 py-2 placeholder:text-textPrimary placeholder:font-normal focus:border focus:border-secondary font-medium border border-secondary rounded lg:rounded-sm lg:min-w-[449px]" />
              <button class="text-sm text-primary bg-base lg:rounded-sm rounded min-w-[80px] py-[9px] lg:-ml-1 ml-[15px] z-10 font-bold">Enviar</button>
            </form>
            {erro && <p class="text-[#FA1400] font-bold text-[10px] leading-[16px] lg:text-sm lg:leading-6 lg:absolute -lg:bottom-3 left-0" >{erro}</p>}
            {success && <p class="text-[#08fa00] font-bold text-[10px] leading-[16px] lg:text-sm lg:leading-6 lg:absolute -lg:bottom-3 left-0" >{success}</p>}
        </div>
      </div>
    </section>
    </>
  );
}

export default Newsletter;
