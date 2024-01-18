import React from "react";

const Wrapper = (props) => {
  console.log(props.children);
  return <div className="container pt-[90px]">{props.children}</div>;
};

export default Wrapper;
