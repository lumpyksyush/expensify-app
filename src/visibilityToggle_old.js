const appInfo = {
	header: 'Visibility Toggle',
	options: ['Show details', 'Hide details']
};

let showOption = true;
let buttonText = appInfo.options[0];
	
const switchMode = (e) => {
	e.preventDefault();
	
	if (showOption) {
		showOption = false;
		buttonText = appInfo.options[1];
	} else {
		showOption = true;
		buttonText = appInfo.options[0];
	}
	
	render();
};

// <div id="app"></div> in index.js
const appRoot = document.getElementById('app');

const render = () => {
	const template = (
		<div> 
			<h1>{appInfo.header}</h1>
			<button onClick={switchMode}>{buttonText}</button>
			<p>{showOption == true ? 'Here are your options!' : ' '}</p>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();