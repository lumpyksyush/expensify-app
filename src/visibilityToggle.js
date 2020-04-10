console.log('You may start');

class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleSwitchMode = this.handleSwitchMode.bind(this);
		this.state = {
			visibility: false
		}
	}
	
	handleSwitchMode() {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
			
		});
	}
	
	render() {
		return (
			<div>
				<h1> Visibility Toggle </h1>
				<button onClick={this.handleSwitchMode}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
				<p>{this.state.visibility ? 'Here are your options' : ''}</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));