import React from "react";
import NavBar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Content() {
	const [select, setSelect] = useState("Income");
	const [amt, setAmt] = useState("");
	const [desc, setDesc] = useState("");
	const [bal, setBal] = useState("");
	useEffect(() => {
		axios.get("http://localhost:8080/expense-manager/bal").then((response) => {
			setBal(response.data);
		});
	}, []);
	const validate = (e) => {
		e.preventDefault();
		if (select === "Expense") {
			axios
				.post("http://localhost:8080/expense-manager/", {
					amt: -amt,
					description: desc,
				})
				.then((response) => {
					console.log(response.data);
					alert(response.data);
				});
		} else {
			axios
				.post("http://localhost:8080/expense-manager/", {
					amt: amt,
					description: desc,
				})
				.then((response) => {
					console.log(response.data);
					alert(response.data);
				});
		}
	};
	return (
		<>
			<NavBar />
			<div className="container">
				<h1>Expense Manager </h1>
				<form>
					<div>
						<input
							id="radio1"
							type="radio"
							value="Income"
							name="exp"
							checked
							onChange={(e) => setSelect(e.target.value)}
						/>
						<label>Income</label>
						<input
							id="radio2"
							type="radio"
							value="Expense"
							name="exp"
							onChange={(e) => setSelect(e.target.value)}
						/>
						<label>Expense</label>
					</div>
					<label>Enter {select}:</label>
					<br />
					<input
						placeholder="Enter Amount"
						type="number"
						value={amt}
						onChange={(e) => {
							setAmt(e.target.value);
						}}
					></input>
					<br />
					<label>Enter Description:</label>
					<br />
					<input
						placeholder="Description"
						type="string"
						value={desc}
						onChange={(e) => {
							setDesc(e.target.value);
						}}
					></input>
				</form>
				<button onClick={validate}>Add</button>
				<h1>Balance: {bal}</h1>
			</div>
		</>
	);
}

export default Content;
