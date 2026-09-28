import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  // GET API ka data store karne ke liye state
  const [basicApi, setApi] = useState([]);

  // Input field ki value store karne ke liye state
  const [username, setusername] = useState("");

  // Kis user ko edit karna hai uski ID store karega
  const [editId, setEditId] = useState(null);

  // Edit button click hone par
  function editUser(user) {

    // User ki ID store karna
    setEditId(user.id);

    // User ka old name input mein lana
    setusername(user.name);
  }


  // PUT / UPDATE function
  async function updateUser(e) {

    e.preventDefault();

    try {

      await axios.put(
        `https://6ab64067c4c7bb67b918ae6d.mockapi.io/users/${editId}`,
        {
          name: username
        }
      );

      // Input empty
      setusername("");

      // Editing complete
      setEditId(null);

      // GET dobara karwana
      setRefresh((prev) => prev + 1);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>

      <h1>POST / PUT Data</h1>


      {/* Input field */}

      <input
        type="text"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />


      {/* Submit ya Update button */}

      {editId === null ? (

        <button onClick={postdata}>
          Submit
        </button>

      ) : (

        <button onClick={updateUser}>
          Update
        </button>

      )}


      <h1>GET Data</h1>


      {/* API data display */}

      {
        basicApi.map((user) => {

          return (
            <div key={user.id}>

              <h3>
                Name: {user.name}
              </h3>

              <img
                src={user.avatar}
                alt=""
                width={150}
              />

              <p>
                Created date: {user.createdAt}
              </p>


              {/* Edit button */}

              <button onClick={() => editUser(user)}>
                Edit
              </button>

            </div>
          );

        })
      }

    </div>
  );
};

export default App;