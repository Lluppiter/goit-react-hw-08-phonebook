import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigaton/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/auth/authSelector';
import { Div } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLogedIn);
  return (
    <Div>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </Div>
  );
};
