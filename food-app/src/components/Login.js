import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

const Login = () => {
  return (
    <Card className="p-10 w-1/3 mx-auto">
      <h1 className="text-xl font-semibold">Welcome Back!!</h1>
      <form>
        <div className="inputGroup">
          <label
            htmlFor="mail"
            className="font-semibold block text-left mb-2 text-sm"
          >
            Name
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            value="mail"
            className="input-control w-full"
          />
        </div>
        <div className="inputGroup">
          <label
            htmlFor="mail"
            className="font-semibold block text-left mb-2 text-sm"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value="password"
            className="input-control w-full"
          />
        </div>
      </form>
    </Card>
  );
};

export default Login;
