'use strict';

// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Button from 'components/Button.jsx';

const Index = {
	init: function(elementId) {
		ReactDOM.render(
			<div>
				SwipedIn
			</div>,
			document.getElementById(elementId)
		);
	}
};

export default Index;