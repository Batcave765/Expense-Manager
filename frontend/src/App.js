import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import "./App.css";
import History from "./Components/History.js";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/history" element={<History />} />
			</Routes>
		</Router>
	);
}

export default App;
