import { Box, Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic, e.g., send data to backend, show success message, etc.
    console.log("Form submitted with data:", formData);
    alert(`First Name: ${formData.fname} \nLast Name: ${formData.lname}`);

    // Optionally, you can reset the form fields after submission
    setFormData({
      fname: "",
      lname: "",
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
          <FormControl fullWidth style={{ marginBottom: 16 }}>
            <TextField
              name="fname"
              label="First Name"
              variant="standard"
              value={formData.fname}
              onChange={handleInput}
            />
          </FormControl>

          <FormControl fullWidth style={{ marginBottom: 16 }}>
            <TextField
              name="lname"
              label="Last Name"
              variant="standard"
              value={formData.lname}
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
