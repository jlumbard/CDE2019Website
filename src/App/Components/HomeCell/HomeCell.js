import React from 'react';
import './HomeCell.css'
import Col from 'react-bootstrap/Col'

class HomeCell extends React.Component{

    render(){
        return(
        <Col className ={"Cell"+this.props.number+" Cell"}>
        <div className={"CellCover Cell"+this.props.number+"Cover"}>
        <div className="CellContainer">
        {this.props.children}
        </div> 
        </div>
        </Col>
        );
    }
}

export default HomeCell;