import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <NavLink to="/contact">Contato</NavLink>
          </NavItem>
        </NavList>
        <MobileMenuButton onClick={toggleMobileMenu}>
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
            <CloseButton onClick={toggleMobileMenu}>×</CloseButton>
            <MobileNavItem>
              <NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/menu" onClick={toggleMobileMenu}>Menu</NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/about" onClick={toggleMobileMenu}>Sobre</NavLink>
            </MobileNavItem>
            <MobileNavItem>
              <NavLink to="/contact" onClick={toggleMobileMenu}>Contato</NavLink>
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
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
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
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  a {
    color: ${({ theme }) => theme.colors.text};
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
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

const MobileNavItem = styled.div`
  margin: 1rem 0;
`;

const HeroSection = styled.section`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/hero-bg.jpg') center/cover no-repeat;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.1rem;
`;

export default Home;