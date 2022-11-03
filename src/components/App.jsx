import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactPage } from 'pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import { PrivedRoute } from 'HOCs/PrivedRoute';
import { PublickRoute } from 'HOCs/PublickRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectIsFetchingUser } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  const isFetching = useSelector(selectIsFetchingUser);
  return (
    !isFetching && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublickRoute>
                  <HomePage />
                </PublickRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublickRoute restricted>
                  <RegisterPage />
                </PublickRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublickRoute restricted>
                  <LoginPage />
                </PublickRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivedRoute>
                  <ContactPage />
                </PrivedRoute>
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
};
