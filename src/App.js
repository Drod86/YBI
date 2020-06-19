import React from 'react';
import Logo from './components/logo/logo';
import Social from './components/social/social';
import Navigation from './components/navigation/navigation';
import Quote from './components/quote/quote';
import Home from './components/home/home';
import Team from './components/team/team';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="zone header">
        <Logo className="logo1"/>
        <Social className="nav2"/>
        <Navigation className="nav1"/>
      </div>
      {/*<Quote classeName="zone"/>*/}
      <Home className="zone"/>
      <Team className="zone"/>
      <Footer className="footer"/>
      {/*<Contact />
      <Donate />
      <Login />
      <Register />*/}
    </div>
  );
}

export default App;
