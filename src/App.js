import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import logo from './logo.svg';
import Button from "@material-ui/core/Button";
import './App.css';
import Menu from "./Menu"; // <= 作成したメニュー画面を読み込み

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/> 
         
      </div>
    );
  }
}

  export default App;
