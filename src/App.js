import logo from './assets/pictures/ftr.png';
import './App.css';
import Header from "./components/Header/header";
import React from "react";
import Nav from "./components/Nav/Nav";
import ActionGraphicRepresentations from "./components/ActionGraphicRepresentations/ActionGraphicRepresentations";
import GamerInterfaces from "./components/GamerInterfaces/GamerInterfaces";

function App() {
  return (
    <div className="Main">
      <Header />
      <Nav />
      <GamerInterfaces />
      <ActionGraphicRepresentations />
    </div>
  );
}



export default App;
