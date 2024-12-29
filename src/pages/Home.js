// Home.js
import React, { lazy, Suspense, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load components
const Testimonials = lazy(() => import("../components/Testimonials"));

// Styled components
const HomeContainer = styled.div`
  width: 100%;
`;

const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const MobileNavItem = styled(motion.div)`
  margin: 1rem 0;

  a {
    color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  cursor: pointer;
`;

const HeroSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/path-to-your-optimized-image.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
  padding: 4rem 1rem;
`;

const HeroContent = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.5rem;
  border-radius: 8px;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion(Link))`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #ffffff;
  }
`;

const Section = styled.section`
  padding: 3rem 1rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const FeaturesSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.i`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const PromotionsSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.accent};
`;

const PromotionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PromotionCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const EmailInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <HomeContainer>
      <Navbar>
        <Logo to="/">Lanchonete Gourmet</Logo>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/menu">Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contato">Contato</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cadastro">Cadastro</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        </NavList>
        <MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="Abrir menu de navegação">
          ☰
        </MobileMenuButton>
      </Navbar>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}>
            <CloseButton onClick={toggleMobileMenu} aria-label="Fechar menu">
              ×
            </CloseButton>
            <MobileNavItem>
              <NavLink to="/" onClick={toggleMobileMenu}>
                Home
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/menu" onClick={toggleMobileMenu}>
                Menu
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/contato" onClick={toggleMobileMenu}>
                Contato
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/about" onClick={toggleMobileMenu}>
                Sobre
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/contato" onClick={toggleMobileMenu}>
                Contato
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/cadastro" onClick={toggleMobileMenu}>
                Cadastro
              </NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/login" onClick={toggleMobileMenu}>
                Login
              </NavLink>
            </MobileNavItem>
          </MobileMenu>
        )}
      </AnimatePresence>

      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <HeroTitle>Bem-vindo à Lanchonete Gourmet</HeroTitle>
          <HeroSubtitle>Sabores incríveis em cada mordida</HeroSubtitle>
          <CTAButton
            to="/menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Ver Menu
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Sobre Nós</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Desde 2010, a Lanchonete Gourmet tem sido sinônimo de qualidade e
          inovação. Nossa missão é proporcionar uma experiência gastronômica
          única, combinando sabores tradicionais com toques modernos.
        </motion.p>
      </Section>

      <FeaturesSection>
        <SectionTitle>Nossos Diferenciais</SectionTitle>
        {[
          {
            icon: "fas fa-utensils",
            title: "Culinária de Qualidade",
            description: "Ingredientes frescos e receitas exclusivas.",
          },
          {
            icon: "fas fa-clock",
            title: "Serviço Rápido",
            description: "Entrega rápida e atendimento eficiente.",
          },
          {
            icon: "fas fa-leaf",
            title: "Opções Saudáveis",
            description: "Pratos equilibrados e nutritivos.",
          },
        ].map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <FeatureIcon className={feature.icon}></FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesSection>

      <PromotionsSection>
        <SectionTitle>Promoções da Semana</SectionTitle>
        <PromotionGrid>
          {[
            {
              title: "Combo Família",
              description:
                "4 hambúrgueres, 2 porções de batata frita e 4 refrigerantes",
              price: "R$ 89,90",
            },
            {
              title: "Happy Hour",
              description: "Chopp em dobro das 17h às 20h",
              price: "A partir de R$ 9,90",
            },
            {
              title: "Sobremesa Grátis",
              description: "Na compra de 2 pratos principais",
              price: "Economize até R$ 25,00",
            },
          ].map((promo, index) => (
            <PromotionCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}>
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <p>
                <strong>{promo.price}</strong>
              </p>
            </PromotionCard>
          ))}
        </PromotionGrid>
      </PromotionsSection>

      <Section>
        <SectionTitle>Fique por dentro das novidades</SectionTitle>
        <NewsletterForm onSubmit={(e) => e.preventDefault()}>
          <EmailInput
            type="email"
            placeholder="Seu e-mail"
            aria-label="Endereço de e-mail"
          />
          <SubmitButton type="submit">Inscrever-se</SubmitButton>
        </NewsletterForm>
      </Section>

      <Suspense fallback={<div>Carregando...</div>}>
        <Testimonials />
      </Suspense>
    </HomeContainer>
  );
}

export default Home;
