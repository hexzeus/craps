import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Define the fadeIn animation first
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.3);
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #ff0000;
  font-family: 'Georgia, serif';
  text-align: center;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
  }
`;

export const Lead = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  color: #ff6666;
  font-family: 'Arial, sans-serif';
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #ffffff;
  font-size: 1.2em;
  animation: ${fadeIn} 2s ease-in;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 15px;
  text-align: center;
  background-color: #333333;
  padding: 15px;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  color: #ff0000;
  display: block;
  margin-bottom: 5px;
`;

export const InfoValue = styled.span`
  color: #ff6666;

  a {
    color: #ff6666;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  text-decoration: none;
`;

export const StyledButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 15px 30px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff6666;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Divider = styled.div`
  border-bottom: 2px solid #ff0000;
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
