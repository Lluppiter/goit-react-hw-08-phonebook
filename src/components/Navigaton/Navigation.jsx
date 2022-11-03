import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelector';
import {
  Nav,
  List,
  Item,
  Link,
  SideLeft,
  SideRight,
} from './Navigation.styled';

export const Navigation = () => {
  const name = useSelector(selectUserName);
  return (
    <Nav>
      <List>
        <Item>
          <SideLeft></SideLeft>
          <Link to="/" end>
            Home Page
          </Link>
          <SideRight></SideRight>
        </Item>
        {name && (
          <Item>
            <SideLeft></SideLeft>
            <Link to="/contacts" end>
              Contacts
            </Link>
            <SideRight></SideRight>
          </Item>
        )}
      </List>
    </Nav>
  );
};
