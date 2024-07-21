import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.3);
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  margin-bottom: -10px; /* Adjust to blend with container */
`;

export const Title = styled.h1`
  font-size: 3em;
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
  font-size: 1.5em;
  margin-bottom: 30px;
  color: #ff6666;
  font-family: 'Arial, sans-serif';
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2em;
  margin-top: 30px;
  color: #ffd700;
  font-family: 'Georgia, serif';

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-top: 20px;
  }
`;

export const List = styled.ul`
  margin-top: 10px;
  color: #ffffff;
  font-size: 1.2em;
  padding-left: 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
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

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;
