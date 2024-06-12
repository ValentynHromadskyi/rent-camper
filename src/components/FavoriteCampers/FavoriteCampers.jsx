import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import Camper from '../Camper/Camper';

function FavoriteCampers() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log(favorites);
  const campers = useSelector(selectCampers);

  const favoriteCampers = campers.filter(camper =>
    favorites.includes(camper._id),
  );
  console.log(campers);
  return (
    <ul>
      {favoriteCampers.map(camper => (
        <li key={camper.id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
}

export default FavoriteCampers;
