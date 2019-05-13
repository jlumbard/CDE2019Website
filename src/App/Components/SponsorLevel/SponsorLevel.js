import React from 'react';
import './SponsorLevel.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class SponsorLevel extends React.Component{
    render(){
        return(
            <Row className="SponsorCol">
            <Col>
            <div>
                <h2>{this.props.level}</h2>
            </div>
            </Col>
            </Row>
        );
    }
}

export default SponsorLevel;