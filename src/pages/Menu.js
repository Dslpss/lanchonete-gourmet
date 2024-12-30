import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

const MenuTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  position: relative;

  &::after {
    content: '';
    width: 50px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const MenuSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const MenuItem = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ItemContent = styled.div`
  padding: 1.5rem;
`;

const ItemName = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ItemDescription = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ItemPrice = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Hambúrguer Gourmet',
      description: 'Blend de carne especial, queijo cheddar, bacon e molho da casa',
      price: 'R$ 32,00',
      image: 'https://source.unsplash.com/featured/?burger',
      category: 'Principais',
    },
    {
      id: 2,
      name: 'Salada Caesar',
      description: 'Alface romana, croutons, parmesão e molho Caesar',
      price: 'R$ 24,00',
      image: 'https://source.unsplash.com/featured/?salad',
      category: 'Entradas',
    },
    {
      id: 3,
      name: 'Cheesecake de Frutas Vermelhas',
      description: 'Cheesecake cremoso com calda de frutas vermelhas',
      price: 'R$ 22,00',
      image: 'https://source.unsplash.com/featured/?cheesecake',
      category: 'Sobremesas',
    },
    // Adicione mais itens conforme necessário
  ];

  const categories = ['Entradas', 'Principais', 'Sobremesas'];

  return (
    <MenuContainer>
      <MenuTitle>Nosso Menu</MenuTitle>
      {categories.map((category) => (
        <MenuSection key={category}>
          <SectionTitle>{category}</SectionTitle>
          <MenuGrid>
            {menuItems
              .filter((item) => item.category === category)
              .map((item, index) => (
                <MenuItem
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemContent>
                    <ItemName>{item.name}</ItemName>
                    <ItemDescription>{item.description}</ItemDescription>
                    <ItemPrice>{item.price}</ItemPrice>
                  </ItemContent>
                </MenuItem>
              ))}
          </MenuGrid>
        </MenuSection>
      ))}
    </MenuContainer>
  );
}

export default Menu;