import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import Container from './components/Container/container.component'
import Header from './components/Header/header.component'
window['Unfurl']?.setConfig({
  apiToken: 'mdi61be6EhHH8Tdcqt5twdltZmFKRhiF87lWONb7hiF6PODKlHiHOMaQNSMW'
});

export const App = () => {
  return (
    <div className="app">
      <Header/>
      <Container/>
    </div>
  );
};

export default App;
