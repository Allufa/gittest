import logo from './logo.svg';
import './App.css';
/*import Header from './header.js';*/
import Technologies from './technologies.js';
import Header from './header';

const App = () => {
	return (
		<div className="App-header">
			<Header />
			<Technologies />
			<Header />

			<br />

		</div>

	);
}

export default App;