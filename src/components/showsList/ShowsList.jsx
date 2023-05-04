import React from 'react';

import './showsList.scss';

function ShowsList({ showsList, setIsShowsDetails, searchValue }) {
  return (
    <section className="showsList">
      {showsList.length === 0 ? (
        <p className="showsList__warning">
          {searchValue.length > 1
            ? `Sorry, nothing found with this search`
            : `Type the show's name`}
        </p>
      ) : (
        <ul className="showsList__list">
          {showsList.map(({ score, show }) => {
            const { id, image, name } = show;
            return (
              <li
                className="showsList__item tv-show-card"
                key={id}
                onClick={() => setIsShowsDetails(true)}
              >
                <img
                  className="tv-show-card__img"
                  src={
                    !!image
                      ? image.medium
                      : 'https://www.ecreativeim.com/blog/wp-content/uploads/2011/05/image-not-found.jpg'
                  }
                  alt="TV Show (img)"
                />
                <div className="tv-show-card__content-wrapper">
                  <h3 className="tv-show-card__title">{name}</h3>
                  <p className="tv-show-card__rating">{`Rating: ${(score * 10).toFixed(
                    1,
                  )} / 10`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ShowsList;
