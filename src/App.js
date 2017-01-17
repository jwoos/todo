import React from 'react';
import {connect} from 'react-redux';

import './App.scss';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
