import { useEffect, useState } from 'react';
import heart from '../../../public/heart.svg';
import heartActive from '../../../public/heartActive.svg';
import { CamperModal } from '../Modal/Modal';
import css from './Camper.module.css';

function Camper({ camper }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(camper._id));
  }, [camper._id]);

  const handleFavoriteClick = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favorites = favorites.filter(favoriteId => favoriteId !== camper._id);
      window.location.reload();
    } else {
      favorites.push(camper._id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={css.camper}>
      <img
        className={css.img}
        src={camper.gallery[0]}
        alt={camper.name}
        width={290}
        height={310}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <CamperModal
          isOpen={isModalOpen}
          camper={camper}
          onClose={() => setIsModalOpen(false)}
        ></CamperModal>
      )}
      <div className={css.wrap}>
        <div className={css.namePrice}>
          <p>{camper.name}</p>
          <div>
            <span className={css.Price}>€{camper.price}.00</span>
            <button onClick={handleFavoriteClick}>
              {isFavorite ? (
                <img src={heartActive} alt="Heart" width="24" height="24" />
              ) : (
                <img src={heart} alt="Heart" width="24" height="24" />
              )}
            </button>
          </div>
        </div>
        <div className={css.ratingWrap}>
          <svg width="20" height="20">
            <use xlinkHref="/star.svg#icon/star" />
          </svg>
          <p className={css.rating}>{camper.rating}</p>
          <p className={css.reviews}>({camper.reviews.length} Reviews)</p>
          <svg width="20" height="20" fill="none" stroke="currentColor">
            <use xlinkHref="/icons.svg#icon-map-pin" />
          </svg>
          <p>{camper.location}</p>
        </div>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.optionsList}>
          <li className={css.options}>
            <svg width="20" height="20" stroke="currentColor">
              <use xlinkHref="/icons.svg#icon-adult" />
            </svg>
            <p>{camper.adults} adults</p>
          </li>
          <li className={css.options}>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use xlinkHref="/icons.svg#icon-gearbox" />
            </svg>
            <p>{camper.transmission}</p>
          </li>
          <li className={css.options}>
            <svg width="20" height="20">
              <use xlinkHref="/icons.svg#icon-petrol" />
            </svg>
            <p>{camper.engine}</p>
          </li>
          <li className={css.options}>
            <svg width="20" height="20" fill="none" stroke="currentColor">
              <use xlinkHref="/icons.svg#icon-beds" />
            </svg>
            <p>{camper.details.beds} beds</p>
          </li>
          {camper.details.kitchen === 1 && (
            <li className={css.options}>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <use xlinkHref="/icons.svg#icon-kitchen" />
              </svg>
              <p>kitchen</p>
            </li>
          )}
          {/* <li className={css.options}>
            <svg width="20" height="20">
              <use xlinkHref="/public/icons.svg#icon-tv" />
            </svg>
            {details.TV === 1 && <p>TV</p>}
          </li> */}
          {camper.details.CD === 1 && (
            <li className={css.options}>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <use xlinkHref="/icons.svg#icon-cd" />
              </svg>
              <p>CD</p>
            </li>
          )}
          {camper.details.airConditioner === 1 && (
            <li className={css.options}>
              <p>AC</p>
            </li>
          )}
          {camper.details.bathroom === 1 && (
            <li className={css.options}>
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <use xlinkHref="/icons.svg#icon-Shower" />
              </svg>
              <p>bathroom</p>
            </li>
          )}
          {camper.details.toilet === 1 && (
            <li className={css.options}>
              <svg width="20" height="20">
                <use xlinkHref="/icons.svg#icon-toilet" />
              </svg>
              <p>toilet</p>
            </li>
          )}
        </ul>
        <button className={css.btnShow} onClick={() => setIsModalOpen(true)}>
          Show more
        </button>
      </div>
    </div>
  );
}

export default Camper;
