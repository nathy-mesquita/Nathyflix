import React from 'react';
import { FooterBase, ExternalLink } from './styles';

function Footer() {
  return (
    <FooterBase>
      <ExternalLink href="https://github.com/nathy-mesquita">
        Nathaly Mesquita
      </ExternalLink>
        © 2020. Desenvolvido com ❤ durante a
      <ExternalLink href="https://www.alura.com.br/">
        Imersão React da Alura
      </ExternalLink>

    </FooterBase>
  );
}
{/* <a href="https://www.alura.com.br/">
  <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
</a> */}

export default Footer;
