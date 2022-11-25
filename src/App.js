import React from "react";
import "./App.css";
import Header from "./components/Header";
import QuoteGenerator from "./components/QuoteGenerator";

function App() {
	return (
		<div className="App">
			<Header />
			<QuoteGenerator />
		</div>
	);
}

export default App;
