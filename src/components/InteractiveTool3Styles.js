import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.3);
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff0000;
  font-family: 'Georgia, serif';
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
  }
`;

export const Lead = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #ff6666;
  font-family: 'Arial, sans-serif';
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
`;

export const BetAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1;
  max-width: 120px;

  &:hover {
    background-color: #ff6666;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 16px;
    max-width: 100%;
  }
`;

export const BetButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 10px;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const PayoutText = styled.p`
  font-size: 1.5em;
  color: #ff0000;
  text-align: center;
  margin-top: 20px;

  .highlight {
    font-size: 1.5em;
    color: #ffd700;
    font-weight: bold;
  }
`;

export const Note = styled.p`
  font-size: 1em;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
  background-color: #444444;
  padding: 10px;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 120px;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2em;
  border: 1px solid #ff6666;
  border-radius: 5px;
  color: #000000;
  background-color: #ffffff;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #ff0000;
    box-shadow: 0 0 8px rgba(255, 0, 0, 0.2);
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px;
  }
`;

export const BackToToolsLink = styled(Link)`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #ffd700;
  color: #000000;
  text-align: center;
  text-decoration: none;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ffe135;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 16px;
  }
`;
