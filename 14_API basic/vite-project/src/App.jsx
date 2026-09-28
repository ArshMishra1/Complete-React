import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  // GET data
  const [basicApi, setApi] = useState([]);

  // Input data
  const [username, setusername] = useState("");

  // Edit hone wale user ki ID
  const [edit, setedit] = useState(null);

  // GET function
  async function users() {
    try {
      let response = await axios.get(
        "https://6ab64067c4c7bb67b918ae6d.mockapi.io/users"
      );

      setApi(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Page load par GET
  useEffect(() => {
    users();
  }, []);

  // POST
  async function postdata(e) {
    e.preventDefault();

    try {
      await axios.post(
        "https://6ab64067c4c7bb67b918ae6d.mockapi.io/users",
        {
          name: username,
        }
      );

      setusername("");
      users();
    } catch (error) {
      console.log(error);
    }
  }

  // EDIT button
  function editdata(user) {
    setedit(user.id);
    setusername(user.name);
  }

  // UPDATE / PUT
  async function editdata2() {
    try {
      await axios.put(
        `https://6ab64067c4c7bb67b918ae6d.mockapi.io/users/${edit}`,
        {
          name: username,
        }
      );

      setusername("");
      setedit(null);

      // Updated data GET karna
      users();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteData(id) {
  try {
    await axios.delete(
      `https://6ab64067c4c7bb67b918ae6d.mockapi.io/users/${id}`
    );

    users();
  } catch (error) {
    console.log(error);
  }
} 
  return (
    <div>
      <h1>Hello API Form User</h1>

      <h1>Post / Edit Data</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />

      {edit === null ? (
        <button onClick={postdata}>Submit</button>
      ) : (
        <button onClick={editdata2}>Update</button>
      )}

      <h1>GET Data</h1>

      {basicApi.map((user) => {
        return (
          <div key={user.id}>
            <h3>Name: {user.name}</h3>

            <img src={user.avatar} alt="" width={150} />

            <p>Created date: {user.createdAt}</p>

            <button onClick={() => editdata(user)}>
              Edit
            </button>

            <button onClick={()=>{
              deleteData(user.id)
            }}> Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;