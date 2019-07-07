import React from 'react';
import { Provider } from './context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider>
      <Router>
        <div>
          <Header branding="Contact Manager" />
          <div className="container">
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
