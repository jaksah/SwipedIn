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

    startSwiping() {
        AppActions.startSwiping(this.props.event);
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
                <div style={containerStyle}>
                    <button  style={iconStyle} onClick={ this.close.bind(this) }><span className="glyphicon glyphicon-remove-circle" /></button>  
                </div>
                <EventDetails event={this.props.event}/>
                <button onClick={ this.startSwiping.bind(this) }>Start swiping</button>
                <MatchList matched={matched}/>
            </div>
        );
    }
};

var containerStyle = {
    width: "100%",
    height: "30px",
    position: "relative"
}

var iconStyle = {
    fontSize: "20px",
    lineHeight: "20px",
    background: "none",
    color: "#929292",
    border: "none",
    padding: "0",
    position: "absolute",
    right: "10px",
    top: "10px"
}