'use strict';

import React from 'react';

export default class MatchListElement extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={containerStyle}>
                <img style={imageStyle} src={'http://forum.must.ac.ug/sites/default/files/default-avatar.png'} />
                <div style={paragraphContainerStyle}>
                    <p style={userHeader}>{this.props.attendee.name}</p>
                    <p style={userSubHeader}>{this.props.attendee.mutual} mutual friends</p>
                </div>
            </div>
        );
    }
};

    
var containerStyle = {
    border: "1px #eee solid",
    padding: "10px"
}

var imageStyle = {
    width: "45px",
    height: "45px",
    border: "1px #eee solid",
    display: "inline-block",
    verticalAlign: "top"
}

var paragraphContainerStyle = {
    display: "inline-block",
    padding: "5px 10px",
}

var userHeader = {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "bold",
    marginBottom: 0
}

var userSubHeader = {
    fontSize: "12px",
    lineHeight: "15px",
    marginBottom: 0,
    color: "#929292"
}