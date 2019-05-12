import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from 'App/img/logo.png' //would love to learn why these relative links suck so much
import './NaturalNavbar.css'

class NaturalNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            language: "English",
        };
    }

    changeLanguage(newLanguage){
        this.setState({language : newLanguage});
    }

    render (){
        console.log(this.state.language)

        return(
        <Navbar  variant="dark">
        <Navbar.Brand href="/">
        { <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
        /> }
        </Navbar.Brand>
        <Nav className="mr-auto">
       <NavDropdown title={"CDE 2019"} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Spencer Engineering Building</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Amit Chakma Engineering Building</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Ivey Business School</NavDropdown.Item>
            <NavDropdown.Item className="red" href="/contact"> {this.state.language === "English" ? "Contact Us" : "Contactez-Nous"}</NavDropdown.Item>
            <NavDropdown.Item href="/history">{this.state.language === "English" ? "History" : "Histoire"}</NavDropdown.Item>
            <NavDropdown.Item href="/team">{this.state.language === "English" ? "Our Team" : "L'Equipe"}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Doubletree by Hilton</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className={this.state.language === "English" ? "activeLanguage" : "language"} onClick={() => this.changeLanguage("English")}>English</NavDropdown.Item>
            <NavDropdown.Item className={this.state.language === "French" ? "activeLanguage" : "language"} onClick={() => this.changeLanguage("French")}>French</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar>
    );
    }
} 
export default NaturalNavbar;