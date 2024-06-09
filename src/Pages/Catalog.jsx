import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCampers } from '../redux/campers/operations';
import CampersList from '../components/CampersList/CampersList';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <CampersList />
    </>
  );
}

export default Contacts;
