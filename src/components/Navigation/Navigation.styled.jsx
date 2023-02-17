import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding-left: 30px;
  padding-bottom: 30px;
  padding-top: 30px;
`;
export const Link = styled(NavLink)`
  padding: 10px;
  margin-right: 30px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;
  color: #222121;
  &.active {
    background-color: #fb8a34;
    color: #f8f8f8;
  }
  :hover:not(.active),
  :focus:not(.active) {
    box-shadow: 0 0 10px;
    background-color: #fb8a34;
    color: #f8f8f8;
  }
`;