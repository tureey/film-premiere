import React, {Fragment} from 'react';
import './App.css';
import {Header} from './components/Header'
import {Buy} from './section/Buy'

function App() {
  return (
    <div className="app">
      <Header
        title='Avengers: Endgame'
        slogan='A text which makes you want to buy a ticket and press the button'
        actions={(
          <Fragment>
            <a href="#" className="cta">Information</a>
            <a href="#buy" className="cta">Buy tickets</a>
          </Fragment>
        )}
      />

      <Buy/>
    </div>
  );
}

export default App;
