
import './App.css';
import Header from './components/Header';
import Typingbox from './components/Typingbox';
import Footer from './components/Footer';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">

      <Header/>
      <Typingbox/>
      <Footer/>

    </div>
  );
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TypingTest} />
        <Route path="/score" component={ScoreSummary} />
      </Switch>
    </Router>
  );
}

export default App;
