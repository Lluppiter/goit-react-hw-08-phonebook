import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback="...loading">
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
