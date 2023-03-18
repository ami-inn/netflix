
import './App.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { Actions,Originals } from './urls';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={Originals} />
      <RowPost title='Action' isSmall url={Actions} />
   
    </div>
  );
}

export default App;
