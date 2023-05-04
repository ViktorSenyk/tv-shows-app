import React, { useState, useEffect } from 'react';
import { fetchTvShows } from '../../gateways/tvShows';

import SearchForm from '../searchForm/SearchForm';
import ShowCard from '../showCard/ShowCard';
import ShowsDetails from '../showDetails/ShowDetails';

import './showsList.scss';

function ShowsList() {
  const [searchValue, setSearchValue] = useState('');
  const [showsList, setShowsList] = useState([]);
  const [idForDetails, setIdForDetails] = useState(null);

  useEffect(() => {
    searchValue.length > 1 && fetchTvShows(searchValue).then(data => setShowsList(data));
  }, [searchValue]);

  const textForWarningMessage =
    searchValue.length > 1 ? 'Sorry, nothing found with this search' : "Type the show's name";

  return (
    <section className="showsList">
      {idForDetails && (
        <ShowsDetails
          idForDetails={idForDetails}
          setIdForDetails={setIdForDetails}
          showsList={showsList}
        />
      )}

      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />

      {showsList.length === 0 ? (
        <p className="showsList__warning">{textForWarningMessage}</p>
      ) : (
        <ul className="showsList__list">
          {showsList.map(showData => {
            return (
              <ShowCard
                key={showData.show.id}
                showData={showData}
                setIdForDetails={setIdForDetails}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default ShowsList;
