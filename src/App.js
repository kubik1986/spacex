import React from 'react';
import Header from './components/Header/header.js';
import Main from './components/Main/main.js';
import Features from './components/Features/features.js';
import Calendar from './components/Calendar/calendar.js';
import Details from './components/Details/details.js';
import Footer from './components/Footer/footer.js';
import './style.css';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Footer />
    </>
  );
}

export default App;
