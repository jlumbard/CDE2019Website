import React from 'react';
import './App.css';
import NaturalNavbar from '../App/Components/NaturalNavbar/NaturalNavbar.js';
import {Route, Switch } from "react-router-dom";
import Sponsors from './Pages/Sponsors/Sponsors.js';
import MainPage from  './Pages/MainPage/MainPage.js';
import Footer from './Components/Footer/Footer.js';
import Contact from './Pages/Contact/Contact.js';
import Schedule from './Pages/Schedule/Schedule.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        language: "English",
    };
  }

  changeLanguage(newLanguage){
    this.setState({language : newLanguage});
  }
  
  render(){
    return (
      <div>
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>

     {/*I'm like 90% sure the below is bad practice(race conditions?) but I don't know how React works lol */}
      <NaturalNavbar language={this.state.language}>
        <span href="/" className={this.state.language === "English" ? "activeLanguage" : "language"} onClick={() => this.changeLanguage("English")}>English</span>
        <span href="/ "className={this.state.language === "French" ? "activeLanguage" : "language"} onClick={() => this.changeLanguage("French")}>French</span>
      </NaturalNavbar>

        <Switch>
          <Route 
          exact path="/" 
          render={props => <MainPage language = {this.state.language}/>}
          />
          <Route 
          path="/Sponsors/" 
          render={props => <Sponsors language = {this.state.language}/>}
          />

          <Route
          path="/Contact/"
          render={props => <Contact language = {this.state.language}/>}
          />

          <Route
          path="/Schedule/"
          render={props => <Schedule language = {this.state.language}/>}
          />

        </Switch>

      <Footer/>
      </div>
    );
  }
}

export default App;
