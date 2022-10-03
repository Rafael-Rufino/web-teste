import React from "react";

import "stencil-tailwind-template";

import { Container, Wrapper } from "./styles";

import lockImg from "../../assets/logo.svg";

export const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <heading-app
          title="Acessando sua conta"
          description="Informe seu login e senha para continuar"
        />
        <input-app
          label="Seu login"
          placeholder="E-mail, CPF, Usuário ou Celular"
          type="text"
          onChange={() => {}}
        />
        <input-app
          label="Sua senha"
          placeholder="Digite a sua senha"
          type="password"
          onChange={() => {}}
        />
        <checktext-app
          name="Manter conectado"
          type="checkbox"
          onChange={() => {}}
        />
        <button-app type="submit" name="Acessar sua conta" onClick={() => {}} />
        <link-app
          src={lockImg}
          title="Você deseja redefinir a senha ?"
          href="https://www.gazin.com.br"
          name="Esqueceu sua senha?"
        />
      </Wrapper>
    </Container>
  );
};
