import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("BUTTON CLICKED");

    try {
      const res = await axios.post(
        "https://job-tracker-api-bupk.onrender.com/login",
        {
          email,
          password,
        }
      );

      console.log("LOGIN RESPONSE:", res.data);

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login successful");
    } catch (error) {
      console.log("LOGIN ERROR:", error);

      if (error.response) {
        console.log("STATUS:", error.response.status);
        console.log("FULL RESPONSE:", error.response);
console.log("DATA:", JSON.stringify(error.response.data));
      }

      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "100px auto",
        gap: "10px",
      }}
    >
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;