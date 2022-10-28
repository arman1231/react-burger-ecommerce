import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
// import logo from './logo.svg';
import appStyles from './App.module.css';
import { data } from "../../utils/data";

function App() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main data={data} />
    </div>
  );
}

export default App;
