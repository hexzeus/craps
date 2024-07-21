// import styled from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ffd700;
  font-family: 'Georgia, serif';
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
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
`;

export const List = styled.ul`
  margin-top: 20px;
  color: #ffffff;
  font-size: 1.2em;
  padding-left: 20px;
  list-style: none;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #333333;
  border-radius: 5px;
  line-height: 1.6;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444444;
  }
`;

export const ResourcesLink = styled.a`
  color: #1e90ff;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
    color: #1c86ee;
  }
`;

export const ToolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InteractiveToolLink = styled(Link)`
  display: inline-block;
  padding: 15px 25px;
  background: linear-gradient(45deg, #000000, #ff0000);
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  min-width: 200px;

  &:hover {
    background: linear-gradient(45deg, #1c1c1c, #ff1a1a);
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px 20px;
    min-width: 150px;
  }
`;
