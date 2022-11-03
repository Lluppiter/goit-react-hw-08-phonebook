import { List, Item, Reference } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <List>
      <Item>
        <Reference to="/register">Registration</Reference>
      </Item>
      <Item>
        <Reference to="/login">Login</Reference>
      </Item>
    </List>
  );
};
