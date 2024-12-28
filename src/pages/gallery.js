import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 0 2rem;
`;

const GalleryTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

const galleryItems = [
  { id: 1, src: 'https://source.unsplash.com/featured/?restaurant,food', title: 'Pratos Deliciosos' },
  { id: 2, src: 'https://source.unsplash.com/featured/?chef,cooking', title: 'Nossa Equipe' },
  { id: 3, src: 'https://source.unsplash.com/featured/?restaurant,interior', title: 'Ambiente Acolhedor' },
  { id: 4, src: 'https://source.unsplash.com/featured/?gourmet,burger', title: 'Hambúrguer Gourmet' },
  { id: 5, src: 'https://source.unsplash.com/featured/?salad,healthy', title: 'Opções Saudáveis' },
  { id: 6, src: 'https://source.unsplash.com/featured/?dessert,cake', title: 'Sobremesas Irresistíveis' },
  // Adicione mais itens conforme necessário
];

function Gallery() {
  return (
    <GalleryContainer>
      <GalleryTitle>Nossa Galeria</GalleryTitle>
      <GalleryGrid>
        {galleryItems.map((item) => (
          <GalleryItem key={item.id}>
            <GalleryImage src={item.src} alt={item.title} />
            <GalleryOverlay>{item.title}</GalleryOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
}

export default Gallery;
