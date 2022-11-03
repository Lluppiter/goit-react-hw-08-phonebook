import styled from 'styled-components';

export const Form = styled('form')`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

export const ContactInput = styled('input')`
  width: 250px;
  padding-left: 5px;
  padding-right: 5px;
  border: 0;
  border-radius: 6px;
  box-shadow: 0px 0px 5px #334b99;

  &:hover,
  &:focus {
    scale: 1.1;
    box-shadow: 0px 0px 10px #334b99;
    border: 1px solid #334b99;
  }
`;
export const Button = styled('button')`
  height: 25px;
  min-width: 75px;
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
    box-shadow: 0px 0px 5px #334b99;
  }
`;
