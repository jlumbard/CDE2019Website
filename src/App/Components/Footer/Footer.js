import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import Logo from '../../img/logo.png'
import SocialMedia from '../SocialMedia/SocialMedia.js'


class Footer extends React.Component{
    render(){
        return(
            <Row className="blackFooter">
                <Col className="FooterColumns">
                <div className="FooterMedia">
                <img className="FooterLogo" src={Logo}/>
                <SocialMedia className="SocMed"/>
                </div>
                <h6>Conference on Diveristy in Engineering, 2019.</h6>
                <h6><a href="mailto:cde2019chairs@gmail.com">cde2019chairs@gmail.com</a></h6>
                </Col>
                <Col>
                </Col>
            </Row>
        );
    }
}

export default Footer;