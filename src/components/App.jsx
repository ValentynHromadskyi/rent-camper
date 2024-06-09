import './App.css';
import { selectError } from '../redux/campers/selectors';
import { Toaster } from 'react-hot-toast';

import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../Pages/Home'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage'));
const Catalog = lazy(() => import('../Pages/Catalog.jsx'));

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
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
