'use strict';

import React from 'react';

export default class EventListRow extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	hover: false
        }
    }

	showEvent() {
		this.props.appActions.showEvent(this.props.eventData.id);
	}

	onHover(toggle) {
		this.setState({
			hover: toggle
		});
	}

	render() {
		var eventImageStyle = {
			maxWidth: "100%"
		};
		var eventListRowStyle = {
			display: "flex",
			padding: "5px 0",
			borderBottom: "1px solid whitesmoke",
			backgroundColor: this.state.hover ? 'aliceblue' : 'white',
			cursor: this.state.hover ? 'pointer' : 'default'
		};
		var eventTitleStyle = {
			padding:0,
			margin: 0
		};
		var eventDescStyle = {

		};
		var eventStatsStyle = {
			display:"flex",
			alignItems: "center",
			flexDirection: "column",
			justifyContent: "space-around",
			color: "lightgrey"
		}
		var eventSelectStyle = {
			display:"flex",
			alignItems: "center",
			justifyContent: "center"
		};
        return (
            <div className="event-list-row row" style={eventListRowStyle} onClick={this.showEvent.bind(this)} onMouseEnter={this.onHover.bind(this, true)} onMouseLeave={this.onHover.bind(this, false)}>
            	<div className="event-image-container col-xs-2">
            		<img style={eventImageStyle} src="http://ramcountrymeats.colostate.edu/wp-content/plugins/woocommerce/assets/images/placeholder.png"></img>
            	</div>
            	<div className="event-info col-xs-7">
            		<h2 className="event-title" style={eventTitleStyle}>{this.props.eventData.title}</h2>
            		<p className="event-desc" style={eventDescStyle}>{this.props.eventData.description}</p>
            	</div>
            	<div className="event-stats col-xs-2" style={eventStatsStyle}>
            		<div className="event-time" style={{width:'100%'}}><span className="glyphicon glyphicon-time"></span>{this.props.eventData.startsAt.time}</div>
            		<div className="event-attendees" style={{width:'100%'}}><span className="glyphicon glyphicon-user"></span>{this.props.eventData.attendees.length}</div>
            	</div>
            	<div className="event-select col-xs-1" style={eventSelectStyle}>
            		<span className="glyphicon glyphicon-chevron-right"></span>
            	</div>
            </div>
        );
    }
}