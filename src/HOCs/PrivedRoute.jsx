import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelector';
import { Navigate } from 'react-router-dom';

export const PrivedRoute = ({ children }) => {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/login" />;
};
