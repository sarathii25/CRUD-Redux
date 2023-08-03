import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteuser } from "./UserReducer";

function Home() {
  const users = useSelector((state) => state.user);
//   console.log(users);
    const dispatch = useDispatch()
    const handleDelete =(id) =>{
        dispatch(deleteuser({
            id:id
        }))
    }
  return (
    <div className="container my-3">
      <h2 style={{ textAlign: "center" }}>
        Crud Operations Using Redux Toolkit
      </h2>
      <Link to="/create" className="btn btn-success my-3">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <Link to= {`/edit/${user.id}`} className="btn btn-primary mx-3">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
                </td>               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
