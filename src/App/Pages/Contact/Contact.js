import React from 'react';
import './Contact.css';
import Row from 'react-bootstrap/Row';
import TeamMember from '../../Components/TeamMember/TeamMember.js';
import PageHeader from '../../Components/PageHeader/PageHeader.js';

import Brock from '../../img/Brock.jpg';


class Contact extends React.Component{

    render(){
        return(
            <div className="ContactPage">
            <div className="ContactCover"> 
                <PageHeader
                header="Contact Us"
                detail="Feel free to contact any of the below officials for further information about the conference."
                ></PageHeader>

                <Row className="contactRow">
                    <TeamMember img={Brock} name="Brock Lumbard" position = "VP Tech" email = "jlumbard@uwo.ca"></TeamMember>
                    <TeamMember img={Brock} name="Brock Lumbard" position = "VP Tech" email = "jlumbard@uwo.ca"></TeamMember>
                    <TeamMember img={Brock} name="Brock Lumbard" position = "VP Tech" email = "jlumbard@uwo.ca"></TeamMember>
                </Row>
                <Row className="contactRow">
                    <TeamMember img={Brock} name="Brock Lumbard" position = "VP Tech" email = "jlumbard@uwo.ca"></TeamMember>
                    <TeamMember img={Brock} name="Brock Lumbard" position = "VP Tech" email = "jlumbard@uwo.ca"></TeamMember>
                    <TeamMember img={Brock} name="Brock Lumbard" position = "VP Tech" email = "jlumbard@uwo.ca"></TeamMember>
                </Row>
            </div>
            </div>
        );
    }
}

export default Contact;