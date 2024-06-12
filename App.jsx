import './App.css';
import { selectError } from './src/redux/campers/selectors.js';
import { Toaster } from 'react-hot-toast';

import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './src/components/Layout.jsx';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./src/Pages/Home/Home.jsx'));
const NotFoundPage = lazy(() => import('./src/Pages/NotFoundPage.jsx'));
const Catalog = lazy(() => import('./src/Pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('./src/Pages/Favorites/Favorites.jsx'));

function App() {
  const error = useSelector(selectError);
  return (
    <>
      {error && <Toaster position="top-center" />}
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
