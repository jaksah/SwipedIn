'use strict';

import React from 'react';
import EventListRow from 'components/EventListRow.jsx';
import _ from 'lodash';
export default class EventList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		}
	}
	
	render() {
		var events = this.props.events || [];
		console.log(this.props);
		
		events = _.sortBy(events, function(e){return e.startsAt.date;});
		var appActions = this.props.appActions;
		var prevDate = undefined;

		var rows = [];
		events.map(function(event, i){
			if(event.startsAt.date != prevDate){
				rows.push(
					<div key={'header' + i}>
						<h3 style={{margin: "40px 0 0 0"}}>{event.startsAt.date}</h3>
						<hr></hr>
					</div>
					);
				prevDate = event.startsAt.date;
			}
			rows.push(<EventListRow key={event.id} appActions={appActions} eventData={event} />)
		});

		return (
			<div className="container">
				{rows}
			</div>
		);
	}
}
