import Modal from 'react-modal';
import x from '../../../public/x.svg';
import css from './Modal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
  },
};

Modal.setAppElement('#root');

export function CamperModal({ camper, isOpen, onClose }) {
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} onRequestClose={onClose}>
        <div className={css.container}>
          <div className={css.mainContent}>
            <div className={css.nameWrap}>
              <p className={css.priceContent}>{camper.name}</p>
              <div onClick={() => onClose()}>
                <img src={x} alt="x" width="24" height="24" />
              </div>
            </div>
            <div className={css.secondaryWrapper}>
              <div className={css.secondaryContent}>
                <p className={css.rating}>
                  <svg width="20" height="20">
                    <use xlinkHref="/public/star.svg#icon/star" />
                  </svg>
                  {camper.rating}(
                  {camper.reviews.length > 1
                    ? `${camper.reviews.length} Reviews`
                    : `${camper.reviews.length} Review`}
                  )
                </p>
              </div>
              <div className={css.secondaryContent}>
                <svg width="20" height="20" fill="none" stroke="currentColor">
                  <use xlinkHref="/icons.svg#icon-map-pin" />
                </svg>
                <p className={css.location}>{camper.location}</p>
              </div>
            </div>
            <p className={css.priceContent}>€{camper.price}.00</p>
          </div>
          <div className={css.scrolledWrapper}>
            <div className={css.imgContent}>
              {camper.gallery.map((img, index) => (
                <img
                  key={index}
                  className={css.img}
                  src={img}
                  alt={camper.name}
                  width={290}
                  height={310}
                />
              ))}
            </div>
            <p className={css.description}>{camper.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
