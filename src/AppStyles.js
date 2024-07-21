import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Arial, sans-serif';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: #ff0000;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6666;
    }
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
    margin: 20px 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia, serif';
    color: #ff0000;
  }

  button {
    background-color: #ff0000;
    color: #ffffff;
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff6666;
    }
  }
`;

export const Navbar = styled.nav`
  background-color: #000000;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 20px rgba(255, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavbarBrand = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2.5em;
  color: #ff0000;
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  margin-right: 30px;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
  border: 2px solid #ff0000;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    border-color: #ff6666;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.3em;
  font-family: 'Arial, sans-serif';
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff0000;
    transform: scale(1.1);
  }
`;

export const Footer = styled.footer`
  background-color: #000000;
  padding: 30px;
  text-align: center;
  color: #ff0000;
  font-size: 1.2em;
  font-family: 'Georgia, serif';

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 20px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
  }
`;
