import React from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/contacts/AddContact';

function App() {
  return (
    <Provider>
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
