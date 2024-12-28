// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigation } from '../contexts/NavigationContext';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.background};
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

function Header() {
  const { isMobileMenuOpen, toggleMobileMenu } = useNavigation();

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Lanchonete Gourmet</Logo>
        <MenuIcon onClick={toggleMobileMenu}>
          ☰
        </MenuIcon>
        <NavLinks isOpen={isMobileMenuOpen}>
          <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/menu" onClick={handleLinkClick}>Menu</NavLink>
          <NavLink to="/about" onClick={handleLinkClick}>Sobre</NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>Contato</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
