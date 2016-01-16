'use strict';

import React from 'react';

export default class EventDetails extends React.Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <div style={containerStyle}>
                <div style={headerContainer}>
                    <h3 style={headingStyle}>{this.props.event.title}</h3>
                    <img className="eventImage" style={imageStyle} src={this.props.event.imageUrl} />
                </div>

                <p style={paragraphStyle}><span className="glyphicon glyphicon-calendar" style={iconStyle} /><span style={iconLabelStyle}>{this.props.event.date}</span></p>
                <hr style={hrStyle} />
                <p style={paragraphStyle}><span className="glyphicon glyphicon-time" style={iconStyle} /><span style={iconLabelStyle}>{this.props.event.time}</span></p>
                <hr style={hrStyle} />
                <p style={paragraphStyle}><span className="glyphicon glyphicon-user" style={iconStyle} /><span style={iconLabelStyle}>{this.props.event.attendees.length} attendees</span></p>
                <hr style={hrStyle} />

                <p style={paragraphStyle}>
                    <span style={paragraphDescriptionStyle}>Description</span>
                    <span style={paragraphLongTextStyle}>{this.props.event.description}</span>
                </p>
            </div>
        );
    }
};


var containerStyle = {
    padding: "10px"
}

var imageStyle = {
    width: "100%",
    maxHeight: "150px",
    border: "1px #eee solid",
    marginBottom: "10px"
}

var hrStyle = {
    margin: "0"
}

var headerContainer = {
    position: "relative"
}

var headingStyle = {
    position: "absolute",
    padding: "10px",
    bottom: 0
}

var paragraphStyle = {
    margin: "10px"
}

var paragraphDescriptionStyle = {
    fontSize: "10px",
    marginBottom: 0,
    display: "block",
    color: "#929292"
}

var paragraphLongTextStyle = {
    fontSize: "12px"
}

var iconStyle = {
    marginRight: "10px",
    color: "#929292"
}

var iconLabelStyle = {
    color: "#929292"
}

