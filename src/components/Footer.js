import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <SectionTitle>Sobre Nós</SectionTitle>
          <p>Lanchonete Gourmet - Sabores incríveis em cada mordida.</p>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Horário de Funcionamento</SectionTitle>
          <p>Segunda a Sexta: 11h às 23h</p>
          <p>Sábado e Domingo: 11h às 00h</p>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Contato</SectionTitle>
          <p>Tel: (11) 99999-9999</p>
          <p>Email: contato@lanchonete.com</p>
          <p>Endereço: Rua Example, 123</p>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Redes Sociais</SectionTitle>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://whatsapp.com" target="_blank">
              <FaWhatsapp />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Lanchonete Gourmet. Todos os direitos reservados.
      </Copyright>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 3rem 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  text-align: left;
`;

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

export default Footer;