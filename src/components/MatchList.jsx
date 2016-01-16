'use strict';

import React from 'react';
import MatchListElement from 'components/MatchListRow.jsx';

export default class MatchList extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        var rows = [];

        for (var i in this.props.matched) { 
            rows.push(<MatchListElement key={this.props.matched[i].id} attendee={this.props.matched[i]}/>);
        }  

        return (
            <div style={containerStyle}>
                <p style={listHeaderStyle}>Matched attendees</p>
                {rows}
            </div>
        );
    }
};

var containerStyle = {
    padding: "10px"
}

var listHeaderStyle = {
    borderBottom: "1px #000 solid",
    fontWeight: "bold",
    margin: 0
}