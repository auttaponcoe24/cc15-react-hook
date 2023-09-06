import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
	const [category, setCategory] = useState("");
	const [count, setCount] = useState(0);

	// every render, rerender
	// useEffect(() => {
	// 	console.log("effect hook #1");
	// });

	// Syntax : useEffect(setUp, dependenciesArray)
	useEffect(() => {
		console.log("effect hook #2 - Category");
	}, [category]);

	useEffect(() => {
		console.log("effect hook #3 - Count");
	}, [count]);

	console.log("render, rerender");
	return (
		<>
			<h1>useEffect : {category || "not-select"}</h1>
			<div className="button__group">
				<button onClick={() => setCategory("posts")}>posts</button>
				<button onClick={() => setCategory("photos")}>photos</button>
				<button onClick={() => setCategory("todos")}>todos</button>
				<button onClick={() => setCategory("users")}>users</button>
				<button onClick={() => setCount((c) => c + 1)}>+</button>
				<div>{count}</div>
				<button onClick={() => setCount((c) => c - 1)}>-</button>
			</div>

			<ul className="lists">
				<li className="lists__item">item-1</li>
			</ul>
		</>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
