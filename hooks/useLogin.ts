import { useState } from 'react';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState({ email: false, senha: false });

  const validarESubmeter = () => {
    let temErro = false;
    const novoErro = { email: false, senha: false };

    if (!email) { novoErro.email = true; temErro = true; }
    if (!senha) { novoErro.senha = true; temErro = true; }

    setErro(novoErro);
  };

  return { email, setEmail, senha, setSenha, erro, validarESubmeter };
};