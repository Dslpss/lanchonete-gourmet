// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>© 2023 Lanchonete Gourmet. Todos os direitos reservados.</p>
      <p>Endereço: Rua da Gastronomia, 123 - Cidade Gourmet</p>
      <p>Telefone: (11) 1234-5678</p>
      <p>Horário de Funcionamento: Seg-Sex 11h-22h, Sáb-Dom 12h-23h</p>
    </FooterWrapper>
  );
}

export default Footer;
