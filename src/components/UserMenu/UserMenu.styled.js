import styled from 'styled-components';

export const Div = styled('div')`
  position: absolute;
  right: 0;
  top: 2px;
  display: flex;
  gap: 10px;
  align-items: center;
  height: 25px;
  background-color: white;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  color: #1f3349;
`;

export const Paragraph = styled('p')`
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Span = styled('span')`
  font-size: 18;
  text-transform: capitalize;
  color: #ee3344;
`;

export const Button = styled('button')`
  height: 20px;
  border-radius: 6px;
  border: 1px solid #334b99;
  background-color: #334b99;
  color: white;
  &:hover,
  &:focus {
    border: 1px solid #334b99;
    background-color: white;
    color: #334b99;
    cursor: pointer;
  }
`;
