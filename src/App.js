import React from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      {/*<Home />
      <Contact />
      <Donate />
      <Login />
      <Register />*/}
    </div>
  );
}

export default App;
