import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const TestimonialsTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
`;

function Testimonials() {
  const testimonials = [
    { text: "A melhor lanchonete gourmet da cidade!", author: "Maria S." },
    { text: "Sabores incríveis e atendimento impecável.", author: "João P." },
    { text: "As opções saudáveis são deliciosas!", author: "Ana R." },
  ];

  return (
    <TestimonialsSection>
      <TestimonialsTitle>O que nossos clientes dizem</TestimonialsTitle>
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialsSection>
  );
}

export default Testimonials;
