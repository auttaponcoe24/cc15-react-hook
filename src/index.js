import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// s1 :

function App() {
	const [category, setCategory] = useState("");
	const [count, setCount] = useState(0);

	// Syntax : useEffect(setUp, dependenciesArray)
	// ################################################
	// ### 1 After render, rerender
	// useEffect(() => {
	// 	console.log("effect hook #1");
	// });

	// solu fetchUserProfile
	// ### 2 After first render
	// useEffect(() => {
	//   console.log('Effect run')
	// }, [])

	// ### 3 After first render and After change state count(dependenciesArray change)
	// useEffect(() => {
	// 	console.log("effect hook #3 - Count");
	// }, [count]);

	// ################################################

	useEffect(() => {
		// console.log("effect hook #2 - Category");

		// url : https://jsonplaceholder.typicode.com/<categories>

		// DEFINE FN
		async function fetchLists() {
			const BASE_URL = "https://jsonplaceholder.typicode.com";
			try {
				let res = await fetch(`${BASE_URL}/${category}`, {
					method: "GET",
				});
				let data = await res.json();
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		}

		// CALL FN
		if (category) fetchLists();
	}, [category]);

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
