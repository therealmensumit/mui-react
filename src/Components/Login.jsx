// Login.js

import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../Store/store"; // Adjust the path as per your project structure

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("https://dummyjson.com/user/login", {
        username: formData.username,
        password: formData.password,
        expiresInMins: 1,
      });

      if (res.status === 200) {
        dispatch(loginSuccess(formData.username)); // Dispatch login success action
        navigate("/products");
      } else {
        setError("Invalid username or password. Please try again.");
        dispatch(
          loginFailure("Invalid username or password. Please try again.")
        );
      }
      console.log(res);
    } catch (err) {
      setError("Failed to log in. Please try again later.");
      console.error(err);
    }

    // Optionally, you can reset the form fields after submission
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"#333"}>
      <form onSubmit={handleSubmit}>
        <Box p={4} maxWidth={500} bgcolor={"whitesmoke"} borderRadius={3}>
          {error && (
            <Typography variant="body2" color="error" paragraph>
              {error}
            </Typography>
          )}
          <FormControl fullWidth style={{ marginBottom: 16 }}>
            <TextField
              name="username"
              label="Username"
              variant="standard"
              value={formData.username}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl fullWidth style={{ marginBottom: 16 }}>
            <TextField
              name="password"
              label="Password"
              variant="standard"
              type="password"
              value={formData.password}
              onChange={handleInput}
            />
          </FormControl>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Login;
