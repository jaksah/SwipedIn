const alt = require('alt-instance.js');
const AppActions = require('actions/AppActions.js');

class Store {

    constructor() {
        this.bindListeners({
            showEvent: AppActions.showEvent
        });
        this.state = {
            events: [],
			showEvent: null,
        };
    }

    /**
     * Adds an item to the store
     */
    showEvent(id) {
        this.setState({ showEvent: id });
    }
};

export default alt.createStore(Store, 'Store');