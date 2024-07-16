import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
  color: #343a40;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
  }
`;

export const Lead = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #6c757d;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 15px;
  }
`;
