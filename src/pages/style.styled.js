import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeCard = styled('div')`
  margin: auto;
  padding: auto;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
`;

export const Reference = styled(Link)`
  text-decoration: none;
  color: #ee3344;
`;

export const FormCard = styled('div')`
  text-align: center;
  margin: auto;
  margin-top: 100px;
  padding: auto;
  width: 300px;
  box-shadow: 0px 0px 10px #334b99;
  border-radius: 6px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const Div = styled('div')`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
