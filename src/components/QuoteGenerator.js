import { React, useState } from "react";
import Quotes from "../quotes";

function QuoteGenerator() {
	const [quote, setQuote] = useState(0);

	function randomNumberInRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const handleClick = () => {
		setQuote(randomNumberInRange(1, 5));
	};

	return (
		<div>
			<p>{quote}</p>
			<button onClick={handleClick}>Generate quote</button>
			<ul className="quoteList">
				{Quotes.map((quotes) => {
					<li>
						<p>{quotes.quotes}</p>
					</li>;
				})}
			</ul>
		</div>
	);
}

export default QuoteGenerator;
