import React from 'react';
import Header from '../../components/Header/Header';
import Techs from './Techs';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Cards from '../../components/Cards/Cards';

function Main() {
  return (
    <>
      <Header />
      <HeaderMenu />
      <Techs />
      <Cards />
      <Footer />
      <Banner />
    </>
  );
}

export default Main;
