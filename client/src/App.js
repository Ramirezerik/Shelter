// import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import NewPet from './components/NewPet';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import EditPet from './components/EditPet';


function App() {
  return (
    <div className="App">
      <Router> 
        <PetList path="/" />
        <NewPet path="/new"/>
        <PetDetails path="/details/:id" />
        <EditPet path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;

//
