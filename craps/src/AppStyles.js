import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  background-color: #343a40;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NavbarBrand = styled(Link)`
  font-size: 2em;
  color: #ffffff;
  text-decoration: none;
  margin-right: 20px;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9900;
  }
`;

export const Footer = styled.footer`
  background-color: #343a40;
  padding: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 15px;
  }
`;
