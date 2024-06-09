import { useEffect, useState } from 'react';
import heart from '../icons/heart.svg';
import heartActive from '../icons/heartActive.svg';

function Camper({
  camper: {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    transmission,
    engine,
    description,
    gallery,
    reviews,
    details,
  },
}) {
  // const dispatch = useDispatch();
  // const favorites = useSelector(state => state.campers.favorites);

  // const isFavorite = favorites.includes(_id);

  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //   if (isFavorite && !storedFavorites.includes(_id)) {
  //     localStorage.setItem(
  //       'favorites',
  //       JSON.stringify([...storedFavorites, _id]),
  //     );
  //   } else if (!isFavorite && storedFavorites.includes(_id)) {
  //     localStorage.setItem(
  //       'favorites',
  //       JSON.stringify(storedFavorites.filter(id => id !== _id)),
  //     );
  //   }
  // }, [_id, isFavorite]);

  // const handleFavoriteClick = () => {
  //   if (isFavorite) {
  //     dispatch(removeFavorite(_id));
  //   } else {
  //     dispatch(addFavorite(_id));
  //   }
  // };
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(_id));
  }, [_id]);

  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favorites = favorites.filter(favoriteId => favoriteId !== _id);
    } else {
      favorites.push(_id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      <img src={gallery[0]} alt="" />
      <p>{name}</p>
      <span>Price {price}</span>
      <p>{rating}</p>
      <p>{reviews.length}</p>
      <p>{location}</p>
      <p>{adults}</p>
      <p>{engine}</p>
      <p>{description}</p>
      <p>{transmission}</p>
      <p>beds {details.beds}</p>
      {details.TV === 1 && <p>TV</p>}
      {details.CD === 1 && <p>CD</p>}
      {details.airConditioner === 1 && <p>AC</p>}
      {details.bathroom === 1 && <p>bathroom</p>}
      {details.kitchen === 1 && <p>kitchen</p>}
      {details.toilet === 1 && <p>toilet</p>}
      <button>Show more</button>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? (
          <img src={heartActive} alt="Heart" width="16" height="16" />
        ) : (
          <img src={heart} alt="Heart" width="16" height="16" />
        )}
      </button>
    </div>
  );
}

export default Camper;
