import React from 'react';

import './showCard.scss';

function ShowCard({ showData, setIdForDetails }) {
  const { score, show } = showData;
  const { id, image, name } = show;
  const checkedImg = !!image
    ? image.medium
    : 'https://laktiale.ua/image/xno-image.png.pagespeed.ic.Sdpr6tU3X1.png';

  return (
    <li className="tv-show-card" onClick={() => setIdForDetails(id)}>
      <img className="tv-show-card__img" src={checkedImg} alt="TV Show (img)" />
      <div className="tv-show-card__content-wrapper">
        <h3 className="tv-show-card__title">{name}</h3>
        <p className="tv-show-card__rating">{`Rating: ${(score * 10).toFixed(1)} / 10`}</p>
      </div>
    </li>
  );
}

export default ShowCard;
