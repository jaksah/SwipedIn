'use strict';

import React from 'react';
import EventDetails from 'components/EventDetails.jsx';
import MatchList from 'components/MatchList.jsx';

export default class Event extends React.Component {
  
    constructor(props) {
        super(props);
    }

    render() {
        var event = {
            title: "Event name",
            imageUrl: "https://i.ytimg.com/vi/eq7Adzo4QAE/maxresdefault.jpg",
            date: "16-02-11",
            time: "18:30",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vestibulum justo, non sagittis orci. Aliquam efficitur elit mi, aliquet mattis ligula accumsan at. Pellentesque efficitur non odio sit amet congue. Quisque dictum efficitur varius. Curabitur iaculis vestibulum magna.",
            attendees: [{
                name: "Name 1",
                mutual: 18
            },{
                name: "Name 2",
                mutual: 34
            },{
                name: "Name 3",
                mutual: 55
            },{
                name: "Name 4",
                mutual: 77
            }]
        }

        var matched = [{
            id: 1,
            name: "Name 1",
            mutual: 18
        },{
            id: 2,
            name: "Name 3",
            mutual: 55
        }]

        return (
            <div>
                <EventDetails event={event}/>
                <MatchList matched={matched}/>
            </div>
        );
    }
};
