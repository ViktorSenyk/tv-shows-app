import React, { useState, useEffect } from 'react';
import { fetchTvShows } from './gateways/tvShows';

import Header from './components/header/Header';
import SearchForm from './components/searchForm/SearchForm';
import ShowsList from './components/showsList/ShowsList';
import ShowsDetails from './components/showsDetails/ShowsDetails';
import Footer from './components/footer/Footer';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [showsList, setShowsList] = useState([]);
  const [isShowsDetails, setIsShowsDetails] = useState(false);

  useEffect(() => {
    searchValue.length > 1 && fetchTvShows(searchValue).then(data => setShowsList(data));
  }, [searchValue]);

  return (
    <>
      <Header />
      <main>
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
        <ShowsList
          showsList={showsList}
          setIsShowsDetails={setIsShowsDetails}
          searchValue={searchValue}
        />
        {isShowsDetails && <ShowsDetails />}
      </main>
      <Footer />
    </>
  );
}

export default App;
