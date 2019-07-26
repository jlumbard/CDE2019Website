import React from 'react';
import './FAQ.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class FAQ extends React.Component{


    render(){
        
    /*Has props question and answer*/
        return(
            <Row className="faqRow">
                {/*two columns, one for question and and one for answer, which is revealed on hover.*/}
                <Col className="questionCol">
                <div className="question">
                <span>
                {" " + this.props.question + ""}
                </span>
                </div>
                <div className="answer"> 
                {"" + this.props.answer + " "}
                </div>
                </Col>
            </Row>
        );
    }
}

export default FAQ;