import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 0 2rem;
`;

const AboutTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutText = styled.div`
  font-size: 1.1rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const ValuesSection = styled.section`
  margin-top: 3rem;
`;

const ValuesTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ValueItem = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const ValueIcon = styled.i`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 0.5rem;
`;

function About() {
  return (
    <AboutContainer>
      <AboutTitle>Sobre Nós</AboutTitle>
      <AboutContent>
        <AboutImage src="https://source.unsplash.com/featured/?restaurant,kitchen" alt="Nossa cozinha" />
        <AboutText>
          <Paragraph>
            Bem-vindo à Lanchonete Gourmet, onde a paixão pela gastronomia encontra a inovação culinária. Fundada em 2020, nossa missão é oferecer uma experiência gastronômica única, combinando ingredientes frescos e de alta qualidade com técnicas culinárias modernas.
          </Paragraph>
          <Paragraph>
            Nossa equipe de chefs talentosos trabalha incansavelmente para criar pratos que não apenas satisfazem o paladar, mas também despertam os sentidos. Desde nossos hambúrgueres gourmet artesanais até nossas sobremesas elaboradas, cada item do nosso menu é cuidadosamente preparado para proporcionar uma explosão de sabores.
          </Paragraph>
          <Paragraph>
            Na Lanchonete Gourmet, acreditamos que a comida é mais do que sustento - é uma forma de arte, uma experiência para ser saboreada e compartilhada. Convidamos você a se juntar a nós nesta jornada culinária e descobrir por que somos considerados um dos melhores destinos gastronômicos da cidade.
          </Paragraph>
        </AboutText>
      </AboutContent>
      <ValuesSection>
        <ValuesTitle>Nossos Valores</ValuesTitle>
        <ValuesList>
          <ValueItem>
            <ValueIcon className="fas fa-check-circle"></ValueIcon>
            Qualidade sem compromissos
          </ValueItem>
          <ValueItem>
            <ValueIcon className="fas fa-heart"></ValueIcon>
            Paixão pela culinária
          </ValueItem>
          <ValueItem>
            <ValueIcon className="fas fa-users"></ValueIcon>
            Atendimento excepcional
          </ValueItem>
          <ValueItem>
            <ValueIcon className="fas fa-leaf"></ValueIcon>
            Sustentabilidade e responsabilidade social
          </ValueItem>
        </ValuesList>
      </ValuesSection>
    </AboutContainer>
  );
}

export default About;
