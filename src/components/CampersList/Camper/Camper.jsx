function Camper({
  camper: {
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
    </div>
  );
}

export default Camper;
