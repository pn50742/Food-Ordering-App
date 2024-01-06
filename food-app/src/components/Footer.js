import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-20 mt-10">
      <Grid container spacing={2}>
        <Grid sx={{ display: "block", width: "100%" }}>
          <h1 className="text-2xl text-[#ffe281] text-center block mb-3">
            {" "}
            Food Vila
          </h1>
          <p className="text-center text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            <br></br>
            lectus vel ut sollicitudin elit at amet.
          </p>
        </Grid>
        {/* <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid> */}
      </Grid>
    </div>
  );
};

export default Footer;
