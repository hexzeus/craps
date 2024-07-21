import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 30px;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.3);
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #ff0000;
  font-family: 'Georgia, serif';
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 2em;
    margin-bottom: 10px;
  }
`;

export const Lead = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #ff6666;
  font-family: 'Arial, sans-serif';
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    margin-bottom: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

export const Th = styled.th`
  border: 1px solid #ff6666;
  padding: 12px 15px;
  background-color: #ff0000;
  color: #ffffff;
  text-align: left;
  font-size: 1.1em;
  font-family: 'Arial, sans-serif';

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 1em;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.9em;
  }
`;

export const Td = styled.td`
  border: 1px solid #ff6666;
  padding: 12px 15px;
  color: #ffffff;
  text-align: left;
  font-size: 1em;
  font-family: 'Arial, sans-serif';

  &:nth-child(even) {
    background-color: #2a2a2a;
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 0.8em;
  }
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #1e1e1e;
  }

  &:hover {
    background-color: #ff0000;
    color: #ffffff;

    ${Td} {
      background-color: #ff0000;
      color: #ffffff;
    }
  }
`;
