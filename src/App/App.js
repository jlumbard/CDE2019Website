import React from 'react';
import './App.css';
import NaturalNavbar from '../App/Components/NaturalNavbar/NaturalNavbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Countdown from 'react-countdown-now';
import HomeCell from '../App/Components/HomeCell/HomeCell.js';
import SocialMedia from '../App/Components/SocialMedia/SocialMedia.js';

const Completionist = () => <span> Begins Now</span>

//How do I add a language parameter to the below function? What is it even?
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist/>;
  } else {
    // Render a countdown
    return <span> {days} <span className = "smaller">days,</span> {hours} <span className = "smaller">hours,</span> {minutes} <span className="smaller">minutes and</span> {seconds} <span className="smaller">seconds</span></span>;
  }
};

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
        <a className={this.state.language === "English" ? "activeLanguage" : "language"} onClick={() => this.changeLanguage("English")}>English</a>
        <a className={this.state.language === "French" ? "activeLanguage" : "language"} onClick={() => this.changeLanguage("French")}>French</a>
      </NaturalNavbar>

      <Container className="RowContainer">
        <Row>
          <HomeCell number="1">
          <h1 className="CountdownBanner">
          {this.state.language === "English" ? "2019 Conference on Diversity in Engineering" : "Conférence Sur La Diversité En Ingénierie"}
          <br/></h1>
          <hr/>
          <h2><Countdown date={Date.UTC(2019,10,10)} renderer = {renderer} daysInHours={false}>
          <Completionist/>
          </Countdown>
          </h2>
          <SocialMedia/>
          </HomeCell>
        </Row>

        <Row>
          <HomeCell number="2">
          <h1>
          {this.state.language === "English" ? "Schedule" : "Horaire"}
          </h1>
          <hr/>
          <h2>
          {this.state.language === "English" ? "Real-time Live Schedule" : "Calendrier des Événements en Direct"}
          </h2>
          </HomeCell>
          <HomeCell number="3">
          <h1>
          {this.state.language === "English" ? "History" : "Histoire"}
          </h1>
          <hr/>
          <h2>
          {this.state.language === "English" ? "The Past of the CDE" : "L'Histoire du CDE"}
          </h2>
          </HomeCell>
        </Row>

        <Row> 
          <HomeCell number="4">
          <h1>
          {this.state.language === "English" ? "Sponsors" : "Nos Parrains"}
          </h1>
          <hr/>
          <h2>
          {this.state.language === "English" ? "Who Makes This Possible?" : "Who Makes This Possible?"}
          </h2>
          </HomeCell>
          <HomeCell number="5">
          <h1>
          {this.state.language === "English" ? "Venues" : "Lieux"}
          </h1>
          <hr/>
          <h2>
          {this.state.language === "English" ? "Where Will It Be?" : "Where Will It Be?"}
          </h2>
          </HomeCell>
          <HomeCell number="6">
          <h1>
          {this.state.language === "English" ? "Contact Us" : "Contactez-nous"}
          </h1>
          <hr/>
          <h2>
          {this.state.language === "English" ? "Get In-Touch With Our Team" : "Get In-Touch With Our Team"}
          </h2>
          </HomeCell>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
