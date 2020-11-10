import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "reactstrap";
import logo from "../logo.svg";

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

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
      await fetch("/student/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
	}
	getStudent();
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
        <td>{student.address}</td>
        <td>{student.gender}</td>
        <td>{student.email}</td>
        <td>{student.phone}</td>
        <td>
          <Button color="danger" onClick={() => deleteStudent(student.id)}>
            X
          </Button>{" "}
        </td>
      </tr>
    );
  });

  if (isLoading)
    return (
      <div className="loading">
        <header className="loading__header">
          <img src={logo} className="loading__logo" alt="logo" />
          <p>Loading... Please wait</p>
        </header>
      </div>
    );
  else {
    return (
      <Container>
        <div className="navfixer"></div>
        <h2>Student Information</h2>
        <Table bordered hover responsive>
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{studentData}</tbody>
        </Table>
      </Container>
    );
  }
};

export default Student;
