import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  background-color: black;
  color: white;
  text-align: center;
`;

export const Title = styled.h1`
  color: red;
`;

export const Lead = styled.p`
  color: white;
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export const CrapsTable = styled.div`
  margin: 20px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  position: relative;
`;

export const Block = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: black;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
`;

export const Odds = styled.div`
  position: absolute;
  bottom: -20px;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
`;

export const Passline = styled.div`
  background-color: yellow;
  color: black;
  padding: 5px; /* Reduced padding to decrease thickness */
  margin-top: 40px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5em;
  position: relative;
`;

export const PasslineOddsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const PasslineOdds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Chip = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 5px;
  font-size: 1em;
  font-weight: bold;
  border: 2px solid white;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

export const BackToToolsLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: grey;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: darkgrey;
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ChipDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

export const ModalChip = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'red'};
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 5px;
  font-size: 1em;
  font-weight: bold;
  border: 2px solid white;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.7);
`;

export const OddsTitle = styled.h2`
  color: red;
  font-size: 1.5em;
  margin-bottom: 20px;
`;

export const modalStyles = {
  content: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '500px',
    margin: 'auto',
    textAlign: 'center',
    height: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};
