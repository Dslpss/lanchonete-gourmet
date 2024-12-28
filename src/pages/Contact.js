import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const InfoItem = styled.p`
  margin-bottom: 10px;
`;

const ContactForm = styled.form`
  margin-top: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Entre em Contato</ContactTitle>
      <ContactInfo>
        <InfoItem>Endereço: Rua da Gastronomia, 123 - Cidade Gourmet</InfoItem>
        <InfoItem>Telefone: (11) 1234-5678</InfoItem>
        <InfoItem>Email: contato@lanchonetegourmet.com</InfoItem>
      </ContactInfo>
      <ContactForm>
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
}

export default Contact;
