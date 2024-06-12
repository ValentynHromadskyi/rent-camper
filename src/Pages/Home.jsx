import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1> Welcome to Rent Campers App</h1>

      <NavLink to="/catalog">Catalog</NavLink>

      <NavLink to="/favorites">Favorites</NavLink>
    </>
  );
}

export default Home;
