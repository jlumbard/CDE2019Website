import React from 'react';
import './TeamMember.css'
import Col from 'react-bootstrap/Col';



class TeamMember extends React.Component{

    //Should have a prop for the following: Name, Position, Picture, Email Address


    render(){

        var divStyle = {
            backgroundImage: 'url('+this.props.img+')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        };

        return(
            <Col>
                <div style={divStyle} className="memberPhoto">
                </div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.position}</h2>
                <a href={"mailto:"+this.props.email}>{this.props.email}</a>
            </Col>
        );
    }
}

export default TeamMember;