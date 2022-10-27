import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
// import logo from './logo.svg';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
