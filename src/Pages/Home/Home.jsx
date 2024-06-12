import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

function Home() {
  return (
    <>
      <NavLink to="/catalog">
        <button className={css.btn}>Catalog</button>
      </NavLink>

      <NavLink to="/favorites">
        <button className={css.btn}> Favorites</button>
      </NavLink>
      <h1> Welcome to Rent Campers App</h1>
    </>
  );
}

export default Home;
