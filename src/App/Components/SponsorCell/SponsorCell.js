import React from 'react';
import './SponsorCell.css';
import Col from 'react-bootstrap/Col';

class SponsorCell extends React.Component{
    render(){
        return(
            <Col>
            <div className ={"Sponsor"+this.props.number+" Sponsor"}>
            <div className={"SponsorCover Sponsor"+this.props.number+"Cover"}>
            <div className="SponsorContainer">
            <img alt="none" src={this.props.img}/>
            <h1>{this.props.company}</h1>
            {this.props.children}
            </div> 
            </div>
            </div>
            </Col>
        );
    }
}
export default SponsorCell;