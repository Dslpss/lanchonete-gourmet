import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Entre em Contato</ContactTitle>
      <ContactInfo>
        <InfoItem>
          <FaMapMarkerAlt /> Endereço: Rua da Gastronomia, 123 - Cidade Gourmet
        </InfoItem>
        <InfoItem>
          <FaPhoneAlt /> Telefone: (11) 1234-5678
        </InfoItem>
        <InfoItem>
          <FaEnvelope /> Email: contato@lanchonetegourmet.com
        </InfoItem>
      </ContactInfo>
      <ContactForm>
        <FormTitle>Entre em Contato</FormTitle>
        <FormGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensagem:</Label>
          <TextArea id="message" name="message" rows="5" required />
        </FormGroup>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactForm = styled.form`
  margin-top: 30px;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Contact;