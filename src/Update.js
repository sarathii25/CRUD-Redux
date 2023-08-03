import React ,{useState} from 'react'
import { useParams, Link,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./UserReducer";

function Update() {
    const {id} = useParams()   
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user)

    const existingUser = users.filter((exuser)=>exuser.id == id)
    const{name,email} = existingUser[0] //
    const [updname, setUpdName] = useState(name);
    const [updemail, setUpdEmail] = useState(email);

    const handleUpdate =(e) =>{
        e.preventDefault()
        dispatch(updateUser({
            id:id,
            name:updname,
            email:updemail
        }))
        navigate('/')
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h2>Update User</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name..."
              value={updname}
              onChange={(e) => setUpdName(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="name">Email: </label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter email... "
              value={updemail}
              onChange={(e)=> setUpdEmail(e.target.value)}
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
  )

  }
export default Update
