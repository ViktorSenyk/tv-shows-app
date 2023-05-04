import React from 'react';

import Header from './components/header/Header';
import ShowsList from './components/showsList/ShowsList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <ShowsList />
      </main>
      <Footer />
    </>
  );
}

export default App;
