import React from 'react';
import './App.css';
import NaturalNavbar from '../App/Components/NaturalNavbar/NaturalNavbar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Countdown from 'react-countdown-now';
import HomeCell from '../App/Components/HomeCell/HomeCell.js';
import SocialMedia from '../App/Components/SocialMedia/SocialMedia.js';

const Completionist = () => <span> Begins Now</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist/>;
  } else {
    // Render a countdown
    return <span> {days} <span className = "smaller">days,</span> {hours} <span className = "smaller">hours,</span> {minutes} <span className="smaller">minutes and</span> {seconds} <span className="smaller">seconds</span></span>;
  }
};

function App() {
  return (
    <div>
    <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossOrigin="anonymous"
    />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"></link>
    <NaturalNavbar></NaturalNavbar>
    <Container className="RowContainer">
      <Row>
        <HomeCell number="1">
        <h1 className="CountdownBanner">
        2019 Conference on Diversity in Engineering <br/></h1>
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
        <h1>Schedule</h1>
        <hr/>
        <h2>Real-Time Event Schedule</h2>
        </HomeCell>
        <HomeCell number="3">
        <h1>History</h1>
        <hr/>
        <h2>The past of the CDE</h2>
        </HomeCell>
      </Row>
      <Row> 
        <HomeCell number="4">
        <h1>Sponsors</h1>
        <hr/>
        <h2>Who Makes This Possible?</h2>
        </HomeCell>
        <HomeCell number="5">
        <h1>Venues</h1>
        <hr/>
        <h2>Where Are We Going?</h2>
        </HomeCell>
        <HomeCell number="6">
        <h1>Contact</h1>
        <hr/>
        <h2> Get In-Touch With Our Team</h2>
        </HomeCell>
      </Row>
    </Container>


    </div>
  );
}

export default App;
