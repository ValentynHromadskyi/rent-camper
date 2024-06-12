import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import FavoriteCampers from '../../components/FavoriteCampers/FavoriteCampers';
import { NavLink } from 'react-router-dom';
import css from './Favorites.module.css';

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
      <NavLink to="/">
        <button className={css.btn}>Home</button>
      </NavLink>
      <NavLink to="/catalog">
        <button className={css.btn}>Catalog</button>
      </NavLink>
      <h1>FavoriteCampers</h1>
      <FavoriteCampers />
    </>
  );
}

export default Favorites;
