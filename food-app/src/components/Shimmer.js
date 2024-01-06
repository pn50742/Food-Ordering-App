import React from "react";
import Card from "@mui/material/Card";
import { Image, Breathing } from "react-shimmer";

const Shimmer = () => {
  return Array(12)
    .fill(" ")
    .map((e, index) => (
      <Card sx={{ padding: "15px", height: "100%", margin: "10px" }}>
        <Breathing height={100} width={250} />
        <Breathing height={50} width={250} className="mt-3" />
        <Breathing height={100} width={250} className="mt-3" />
      </Card>
    ));
};

export default Shimmer;
