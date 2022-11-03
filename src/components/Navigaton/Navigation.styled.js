import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled('nav')`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const List = styled('ul')`
  padding: 0;

  margin: 0;
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const Item = styled('li')`
  display: flex;
  gap: 0;
  background-color: white;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  background-image: linear-gradient(#334b99 50%, white 50%);
`;
export const SideLeft = styled('div')`
  background-color: #334b99;
  width: 6px;
  height: 30px;
  border-bottom-right-radius: 6px;
`;
export const SideRight = styled('div')`
  background-color: #334b99;
  width: 6px;
  height: 30px;
  border-bottom-left-radius: 6px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  width: 100px;
  height: 30px;

  background-color: white;
  text-decoration: none;

  color: #1f3349;
  background-image: linear-gradient(rgba(51, 75, 153, 0.7), #e8f0ff);

  &.active {
    background-image: linear-gradient(rgba(251, 75, 53, 0.7), #e8f0ff);
  }
  &:hover,
  &:focus {
    scale: 1.055;
  }
`;
