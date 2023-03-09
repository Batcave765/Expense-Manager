import NavBar from "./Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
function History() {
	const [upid, setUpid] = useState("");
	const [select, setSelect] = useState("Income");
	const [amt, setAmt] = useState("");
	const [desc, setDesc] = useState("");
	const [user, setUser] = useState([]);
	const [delid, setDelid] = useState("");
	const [bal, setBal] = useState("");
	useEffect(() => {
		axios.get("http://localhost:8080/expense-manager/").then((response) => {
			setUser(response.data);
		});
		axios.get("http://localhost:8080/expense-manager/bal").then((response) => {
			setBal(response.data);
		});
	}, []);
	const validate1 = (e) => {
		e.preventDefault();
		if (select === "Expense") {
			axios
				.put("http://localhost:8080/expense-manager/", {
					id: upid,
					amt: -amt,
					description: desc,
				})
				.then((response) => {
					console.log(response.data);
					alert(response.data);
				});
		} else {
			axios
				.put("http://localhost:8080/expense-manager/", {
					id: upid,
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
			{user && (
				<>
					<NavBar />
					<div className="container">
						<h1>History of Expenses:</h1>
						<table>
							<thead>
								<tr>
									<th>S.No</th>
									<th>Amount</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{user.map((e) => (
									<tr key={e.id}>
										<td>{e.id}</td>
										<td>{e.amt}</td>
										<td>{e.description}</td>
									</tr>
								))}
							</tbody>
						</table>

						<h1>Balance: {bal}</h1>
						<h2>Update an entry:</h2>
						<label>Enter S.No to update</label>
						<input
							type="number"
							placeholder="Serial No"
							onChange={(e) => setUpid(e.target.value)}
						/>
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
						<button className="update" onClick={validate1}>
							Update
						</button>
						<h2>Delete an entry:</h2>
						<label>Enter S.No to delete:</label>
						<input
							type="number"
							placeholder="Serial No"
							value={delid}
							onChange={(e) => {
								setDelid(e.target.value);
							}}
						/>
						<button
							className="delete"
							onClick={() => {
								axios
									.delete(`http://localhost:8080/expense-manager/${delid}`)
									.then((response) => {
										alert(response.data);
									});
							}}
						>
							Delete!
						</button>
					</div>
				</>
			)}
		</>
	);
}

export default History;
