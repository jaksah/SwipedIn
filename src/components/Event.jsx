'use strict';

import React from 'react';
import EventDetails from 'components/EventDetails.jsx';
import MatchList from 'components/MatchList.jsx';
import AppActions from 'actions/AppActions.js';

export default class Event extends React.Component {
  
    constructor(props) {
        super(props);
    }

    close() {
        AppActions.showEvent(null);
    }

    render() {
        var matched = [{
            id: 1,
            name: "Name 1",
            mutual: 18
        },{
            id: 2,
            name: "Name 3",
            mutual: 55
        }];

        return (
            <div>
                <button onClick={ this.close.bind(this) }>close</button>
                <EventDetails event={this.props.event}/>
                <MatchList matched={matched}/>
            </div>
        );
    }
};
