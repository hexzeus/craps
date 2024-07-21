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

export const CrapsTable = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: 120px; /* Ensure enough space for the puck */
`;

export const Block = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ isHighlighted, isPoint }) => isPoint ? '#ff0000' : isHighlighted ? '#ff6666' : '#ffffff'};
  color: ${({ isHighlighted, isPoint }) => isPoint || isHighlighted ? '#ffffff' : '#000000'};
  border: 2px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  font-size: 1.5em;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2em;
  }
`;

export const Puck = styled.div`
  position: absolute;
  top: ${({ isOff }) => isOff ? '-10px' : 'calc(50% - 15px)'}; // Adjusted for round puck
  left: ${({ isOff }) => isOff ? 'calc(50% - 15px)' : 'auto'}; // Positioned centrally when OFF
  width: 30px; // Smaller size
  height: 30px; // Smaller size
  background-color: ${({ isOff }) => isOff ? '#000000' : '#ffffff'};
  color: ${({ isOff }) => isOff ? '#ffffff' : '#000000'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; // Ensures the puck is perfectly round
  transition: left 0.3s ease, top 0.3s ease, background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 0.8em;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }
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

  &:hover {
    background-color: #ff6666;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 8px 16px;
  }
`;

export const TurnOffPuckButton = styled(Button)`
  margin-top: 20px;
`;

export const Chip = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background-color: ${({ amount }) => amount === 18 ? '#ffffff' : '#ff4500'};
  color: ${({ amount }) => amount === 18 ? '#000000' : '#ffffff'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 0.8em;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.7em;
  }
`;

export const BetSection = styled.div`
  margin-top: 30px;
  text-align: center;

  & > ${Title} {
    font-size: 2em;
    color: #ffd700;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
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
