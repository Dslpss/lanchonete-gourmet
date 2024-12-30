import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHeart, FaUsers, FaLeaf } from 'react-icons/fa';

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle
        as={motion.h1}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sobre Nós
      </AboutTitle>
      <AboutContent>
        <ImageContainer
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AboutImage 
            src="https://source.unsplash.com/featured/?restaurant,kitchen" 
            alt="Nossa cozinha" 
          />
        </ImageContainer>
        <AboutText
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
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
      <ValuesSection
        as={motion.section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <ValuesTitle>Nossos Valores</ValuesTitle>
        <ValuesList>
          <ValueItem whileHover={{ scale: 1.05 }}>
            <FaCheckCircle /> Qualidade sem compromissos
          </ValueItem>
          <ValueItem whileHover={{ scale: 1.05 }}>
            <FaHeart /> Paixão pela culinária
          </ValueItem>
          <ValueItem whileHover={{ scale: 1.05 }}>
            <FaUsers /> Atendimento excepcional
          </ValueItem>
          <ValueItem whileHover={{ scale: 1.05 }}>
            <FaLeaf /> Sustentabilidade e responsabilidade social
          </ValueItem>
        </ValuesList>
      </ValuesSection>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

const AboutTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.875rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ValuesSection = styled.section`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 2px solid ${({ theme }) => theme.colors.secondary}20;
`;

const ValuesTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ValueItem = styled(motion.li)`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.875rem;
  }
`;

export default About;