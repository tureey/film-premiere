import React, {Fragment} from 'react';
import './App.css';
import {Header} from './components/Header'
import {BuyTickets} from './components/BuyTickets'

function App() {
  return (
    <div className="app">
      <Header
        title='Avengers: Endgame'
        slogan='A text which makes you want to buy a ticket and press the button'
        actions={(
          <Fragment>
            <button>Information</button>
            <button>Buy tickets</button>
          </Fragment>
        )}
      />

      <BuyTickets/>
    </div>
  );
}

export default App;
