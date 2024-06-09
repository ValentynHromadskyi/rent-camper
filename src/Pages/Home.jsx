import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1> Welcome to Rent Campers App</h1>

      <NavLink to="/catalog">catalog</NavLink>

      <NavLink to="/favorites">favorites</NavLink>
    </>
  );
}

export default Home;
