import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "./UserReducer";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user)

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addUser({id: users[users.length-1].id+1,name,email}))
    navigate("/")
  }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="name">Email: </label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter email... "
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            ></input>
          </div>
          <br />
          <Link to="/" className="btn btn-danger mx-3">
            Back
          </Link>
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
