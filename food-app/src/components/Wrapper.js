import React from "react";

const Wrapper = (props) => {
  console.log(props.children);
  return <div className="body-wrapper mt-28">{props.children}</div>;
};

export default Wrapper;
