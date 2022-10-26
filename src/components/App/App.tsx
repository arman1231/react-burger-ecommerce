import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
// import logo from './logo.svg';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
    </div>
  );
}

export default App;
