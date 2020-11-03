import React, { useState, useEffect } from "react";
import { Container, Table } from "reactstrap";

const Student = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [students, setStudents] = useState([]);

	const getStudent = async () => {
		const response = await fetch("/student");
		const result = await response.json();
		setStudents(result);
		setIsLoading(false);
		return result;
	};

	useEffect(() => {
		getStudent();
	}, []);

	// Populating table with students data
	let studentData = students.map((student) => {
		return (
			<tr key={student.id}>
				<th scope="row">{student.id}</th>
				<td>{student.rollNo}</td>
				<td>{student.fname}</td>
				<td>{student.lname}</td>
                <td>{student.gender}</td>
				<td>{student.address}</td>
				<td>{student.email}</td>
				<td>{student.phone}</td>
			</tr>
		);
	});

	if (isLoading)
		return (
			<Container>
				<div>Loading... Please Wait</div>
			</Container>
		);
	else {
		return (
			<Container>
				<h2>Student Information</h2>
				<Table bordered>
					<thead>
						<tr>
							<th>ID</th>
							<th>RollNo</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Address</th>
							<th>Gender</th>
							<th>Email</th>
							<th>PhoneNo</th>
						</tr>
					</thead>
					<tbody>{studentData}</tbody>
				</Table>
			</Container>
		);
	}
};

export default Student;