import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations.js';
import CampersList from '../../components/CampersList/CampersList.jsx';
import { LoadMore } from '../../components/LoadMore/LoadMore.jsx';
import { selectCampers } from '../../redux/campers/selectors.js';
import { resetItems } from '../../redux/campers/slice.js';
import { Bar } from '../../components/Bar/Bar.jsx';
import css from './Caralog.module.css';
import { NavLink } from 'react-router-dom';

function Catalog() {
  const [page, setPage] = useState(1);
  const campers = useSelector(selectCampers);

  const totalItems = 13;

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(resetItems());
    const limit = 4;
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch, page]);

  const totalPages = Math.ceil(totalItems / 4);

  return (
    <>
      <NavLink to="/">
        <button className={css.btn}>Home</button>
      </NavLink>
      <NavLink to="/favorites">
        <button className={css.btn}> Favorites</button>
      </NavLink>
      <div className={css.wrap}>
        <Bar />
        <div>
          <CampersList />
          {totalItems && campers.length > 0 && page < totalPages && (
            <LoadMore handleLoadMore={handleLoadMore} />
          )}
          {page >= totalPages && <b>These are all the results</b>}
        </div>
      </div>
    </>
  );
}

export default Catalog;
