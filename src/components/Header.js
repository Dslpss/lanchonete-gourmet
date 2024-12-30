import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { currentUser } = useAuth();
  const auth = getAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      closeMenu();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [currentUser]);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={closeMenu}>
          Lanchonete Gourmet
        </Logo>
        
        <MenuIcon onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <NavLinks isOpen={isMobileMenuOpen}>
          <NavItem>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/menu" onClick={closeMenu}>Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" onClick={closeMenu}>Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" onClick={closeMenu}>Contato</NavLink>
          </NavItem>
          {currentUser ? (
            <>
              <UserInfo>Olá, {currentUser.email}</UserInfo>
              <LogoutButton onClick={handleLogout}>
                Sair
              </LogoutButton>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink to="/register" onClick={closeMenu}>Cadastro</NavLink>
              </NavItem>
              <NavItem>
                <AuthButton to="/login" onClick={closeMenu}>Login</AuthButton>
              </NavItem>
            </>
          )}
        </NavLinks>
      </Nav>
      <AnimatePresence>
        {showPopup && (
          <Popup
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Login realizado com sucesso!
          </Popup>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  z-index: 1001;
  margin-right: auto; /* Adiciona espaço automático à direita */
`;

const MenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  z-index: 1001;
  margin-left: 1rem; /* Adiciona espaço à esquerda */
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 70px; /* Ajuste conforme a altura do seu header */
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 1rem 2rem;
    gap: 1rem;
    z-index: 1000;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const AuthButton = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: white; /* Adiciona esta linha para manter o texto visível */
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const UserInfo = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 1.1rem;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${props => props.theme.colors.success};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1100;
`;

export default Header;