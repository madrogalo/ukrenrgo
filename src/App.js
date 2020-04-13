import React from 'react';
import { connect } from 'react-redux';

import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

import './App.css';

function App({ showsidebar }) {
  return (
    <div className="App">
      <Header />
      {showsidebar && <Sidebar />}
      <header className="App-header">
      
        <p>
          Hello world <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
        <Counter2 />
        <Button variant="primary">Primary</Button>{' '}
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    showsidebar: state.showsidebar.showsidebar
  }
}

export default connect(mapStateToProps)(App);
