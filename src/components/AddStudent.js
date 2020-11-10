import React, { useState } from "react";
import { Container } from "reactstrap";

const AddStudent = () => {
  const [id, setId] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let studentData = {
      id: id,
      rollNo: rollNo,
      fname: firstName,
      lname: lastName,
      address: address,
      gender: gender,
      email: email,
      phone: phone,
    };

    await fetch("/addstudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <Container>
      <div className="navfixer text-center mb-4">Add Student from here</div>
      <div className="col-12 col-md-6 mx-auto my-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Id:</label>
            <input
              className="form-control"
              type="text"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Roll No:</label>
            <input
              className="form-control"
              type="text"
              value={rollNo}
              onChange={(e) => {
                setRollNo(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              className="form-control"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              className="form-control"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              className="form-control"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              className="form-control"
              type="text"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              className="form-control"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="Submit" />{" "}
          <input type="button" value="Cancel" onClick={() => {}} />
        </form>
      </div>
    </Container>
  );
};

export default AddStudent;
