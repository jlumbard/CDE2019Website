import React from 'react';
import './Schedule.css';
import Sched from '../../Components/Sched/Sched.js'
import PageHeader from '../../Components/PageHeader/PageHeader.js';

class Schedule extends React.Component{
    render(){
        return(
            <div>
                <PageHeader
                header="Schedule"
                detail="Weekend events are listed below, and downloadable following this <a>link</a>"
                >
                </PageHeader>
                <Sched>

                </Sched>
            </div>
        );
    }
}
export default Schedule;