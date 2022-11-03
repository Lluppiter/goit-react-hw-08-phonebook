import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelector';
import { Div, Paragraph, Span, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <>
      <Div>
        {name && (
          <Paragraph>
            Welcome <Span>{name}</Span>
          </Paragraph>
        )}
        <Button onClick={() => dispatch(logout())}>Log Out</Button>
      </Div>
    </>
  );
};
