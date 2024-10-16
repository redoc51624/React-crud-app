import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [users, setUser] = useState([]);
  const url = process.env.REACT_APP_DB_URL;

  useEffect(() => {
    loadUsers();
  });

  const loadUsers = async () => {
    const result = await axios.get(url);
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`${url}/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-secondary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class=" edit-btn btn btn-dark mr-2"
                    to={`/users/edit/${user.id}`}
                  >Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  > Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;