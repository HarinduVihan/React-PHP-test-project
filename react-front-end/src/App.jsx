import { useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [resName, setResName] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setName(value);
  }

  async function SendRequest(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/React+PHP%20test%20project/php-back-end/index.php",
        { name }
      );
      alert("name sent success!!");
      console.log(response);
      setResName(response.data.message);
      setName("");
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  }

  return (
    <>
      <form onSubmit={SendRequest}>
        <label htmlFor="name">Name</label>
        <br />
        <input type="text" id="name" onChange={handleChange} value={name} />
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
      <br />
      <div>{resName}</div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default App;
