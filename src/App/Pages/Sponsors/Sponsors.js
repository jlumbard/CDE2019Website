import React from 'react';
import './Sponsors.css';
import SponsorCell from '../../Components/SponsorCell/SponsorCell.js';
import Row from 'react-bootstrap/Row';
import SponsorLevel from '../../Components/SponsorLevel/SponsorLevel.js';
import PageHeader from '../../Components/PageHeader/PageHeader';


import Nutrien from '../../img/nutrien.png';

class Sponsors extends React.Component{

    render(){
        return(
                <div className = "SponsorsPage">
                <PageHeader
                header="Sponsors"
                detail="The Conference on Diversity in Engineering thanks its generous sponsors for making this event possible."
                >
                </PageHeader>

                <SponsorLevel level="Platinum"/>
                <Row>
                    <SponsorCell number="1" company="Nutrien" img={Nutrien}>
                    </SponsorCell>
                </Row>
                <SponsorLevel level="Gold"/>
                <Row>
                    <SponsorCell number="2">
                    </SponsorCell>
                </Row>
                <Row>
                    <SponsorCell number="3">
                    </SponsorCell>
                </Row>
                <SponsorLevel level="Silver"/>
                <Row>
                    <SponsorCell number="4">
                    </SponsorCell>
                </Row>
                <SponsorLevel level="Bronze"/>
                <Row>
                    <SponsorCell number="5">
                    </SponsorCell>
                </Row>
                </div>
            );
    }
}
export default Sponsors;