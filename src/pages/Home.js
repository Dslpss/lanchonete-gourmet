import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaClock, FaAward } from 'react-icons/fa';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroOverlay>
          <HeroContent
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroTitle>Sabores Extraordinários</HeroTitle>
            <HeroSubtitle>Uma experiência gastronômica única</HeroSubtitle>
            <CTAButton 
              to="/menu"
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Cardápio
            </CTAButton>
          </HeroContent>
        </HeroOverlay>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Por que nos escolher?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard
            as={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <FaLeaf size={40} />
            <FeatureTitle>Ingredientes Frescos</FeatureTitle>
            <FeatureText>Selecionamos os melhores ingredientes para sua refeição</FeatureText>
          </FeatureCard>
          <FeatureCard
            as={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <FaClock size={40} />
            <FeatureTitle>Rápido e Eficiente</FeatureTitle>
            <FeatureText>Entrega em até 30 minutos na região</FeatureText>
          </FeatureCard>
          <FeatureCard
            as={motion.div}
            whileHover={{ scale: 1.05 }}
          >
            <FaAward size={40} />
            <FeatureTitle>Premiado</FeatureTitle>
            <FeatureText>Reconhecido pela excelência em qualidade</FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <TestimonialsSection>
        <SectionTitle>O que dizem nossos clientes</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              as={motion.div}
              whileHover={{ scale: 1.05 }}
            >
              <Stars>★★★★★</Stars>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>

      <GallerySection>
        <SectionTitle>Nossa Galeria</SectionTitle>
        <PhotoGrid>
          {photos.map((photo, index) => (
            <PhotoItem
              key={index}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <img src={photo} alt={`Prato ${index + 1}`} />
            </PhotoItem>
          ))}
        </PhotoGrid>
      </GallerySection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const HeroSection = styled.section`
  height: calc(100vh - 80px);
  background: url('https://source.unsplash.com/featured/?restaurant') center/cover no-repeat;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Stars = styled.div`
  color: gold;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const GallerySection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PhotoItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const testimonials = [
  {
    text: "A melhor experiência gastronômica que já tive! Os pratos são simplesmente incríveis.",
    author: "João Silva"
  },
  {
    text: "Ambiente acolhedor e atendimento impecável. Voltarei mais vezes!",
    author: "Maria Santos"
  },
  {
    text: "Sabores únicos e apresentação impecável. Vale cada centavo!",
    author: "Pedro Oliveira"
  }
];

const photos = [
  "https://source.unsplash.com/featured/?food",
  "https://source.unsplash.com/featured/?restaurant",
  "https://source.unsplash.com/featured/?dinner",
  "https://source.unsplash.com/featured/?cooking",
  "https://source.unsplash.com/featured/?meal",
  "https://source.unsplash.com/featured/?chef"
];

export default Home;