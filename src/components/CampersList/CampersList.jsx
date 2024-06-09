import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors';
import Camper from '../Camper/Camper';

function CampersList() {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map(camper => (
        <li key={camper.id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
}

export default CampersList;
