import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './PageHeader.css';

class PageHeader extends React.Component{

    render(){
        return(
            <Row className="SponsorsHeader">
                <Col>
                    <div className="SponsorHeaderTextContainer">
                    <hr/><h1>{this.props.header}</h1><hr/>
                    <h6>{this.props.detail}</h6>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default PageHeader;