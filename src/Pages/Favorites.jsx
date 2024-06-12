import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCampers } from '../redux/campers/operations';

import FavoriteCampers from '../components/FavoriteCampers/FavoriteCampers';
import { NavLink } from 'react-router-dom';

function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    const limit = 10;
    const page = 1;
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch]);

  return (
    <>
      <h1>FavoriteCampers</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <FavoriteCampers />
    </>
  );
}

export default Favorites;
