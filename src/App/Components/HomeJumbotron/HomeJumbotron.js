import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './HomeJumbotron.css'


class HomeJumbotron extends React.Component{

    render(){

        return(
            <Jumbotron className="jumbo">
            <Container>
            <div className = 'tracking-in-expand'>    
            <h1>Welcome to the 2019 Conference on Diversity in Engineering.</h1>
            
            </div>
            <p>
                This annual conference will be held at Western University in London, Ontario. 
            </p>
            <p>
                <Button variant="primary">Apply</Button>
            </p>
            </Container>
            </Jumbotron>
        );
    }
}

export default HomeJumbotron;