import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled('div')`
  position: absolute;
  left: 0;
  top: 2.5px;
  display: flex;
  gap: 10px;
  align-items: center;
  height: 25px;
  background-color: white;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  color: #1f3349;

  list-style: none;
`;

export const Item = styled('li')``;

export const Reference = styled(Link)`
  height: 20px;
  border-radius: 6px;
  border: 1px solid #334b99;
  background-color: #334b99;

  color: white;
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;

  &:hover,
  &:focus {
    border: 1px solid #334b99;
    background-color: white;
    color: #334b99;
    cursor: pointer;
  }
`;
