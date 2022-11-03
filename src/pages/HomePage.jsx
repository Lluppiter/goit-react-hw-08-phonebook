import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelector';
import { HomeCard, Reference } from './style.styled';

export const HomePage = () => {
  const name = useSelector(selectUserName);
  return (
    <>
      {name && (
        <HomeCard>
          <h1>Welcome {name}</h1>
          <p>Thanks for choosing my APP and enjoy your experience</p>
        </HomeCard>
      )}
      {!name && (
        <HomeCard>
          <h1>Welcome Guest</h1>
          <p>
            In order to use this application please{' '}
            {<Reference to="/register">Register</Reference>} or{' '}
            {<Reference to="/login">Login</Reference>} and enjoy your
            experience!
          </p>
        </HomeCard>
      )}
    </>
  );
};
