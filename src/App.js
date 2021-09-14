import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home.js';
// https://api.airvisual.com/v2/countries?key=a2f977a0-7c21-4fe1-a175-7de9665ee4b9

function App() {
	return (
		<div className="App">
			<Link to="/">Home</Link>
		</div>
	);
}

export default App;
