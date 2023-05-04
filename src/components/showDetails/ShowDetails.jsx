import React from 'react';

import './showDetails.scss';

function ShowDetails({ idForDetails, setIdForDetails, showsList }) {
  const choosenShowInfo = showsList.find(({ show }) => show.id === idForDetails);
  const { image, name, genres, url, status, schedule, summary } = choosenShowInfo.show;

  const tempElement = document.createElement('div');
  tempElement.innerHTML = summary;
  const cleanSummary = tempElement.innerText || '-';

  const checkedImg = !!image
    ? image.original
    : 'https://laktiale.ua/image/xno-image.png.pagespeed.ic.Sdpr6tU3X1.png';

  return (
    <section className="details">
      <div className="details__content-wrapper">
        <button className="details__close-button" onClick={() => setIdForDetails(null)}>
          <img src="./img/showDetails/close-button.svg" alt="Close" />
        </button>
        <img className="details__img" src={checkedImg} alt="Show IMG" />
        <h4 className="details__title">{name}</h4>
        <p className="details__genres">{`Genres list: ${
          genres.length > 0 ? genres.join(', ') : '-'
        }`}</p>
        <p className="details__rating">
          {`Rating: ${(choosenShowInfo.score * 10).toFixed(1)} / 10`}
        </p>
        <a className="details__link" href={url} rel="noreferrer" target="_blank">
          Link to show -&gt;
        </a>
        <p className="details__status">{`Status: ${status}`}</p>
        <p className="details__schedule ">{`Schedule: ${
          schedule.days.length > 1 ? schedule.days[0] : 'every day'
        } ${schedule.time}`}</p>
        <p className="details__summary ">{`Summary: ${cleanSummary}`}</p>
      </div>
    </section>
  );
}

export default ShowDetails;
