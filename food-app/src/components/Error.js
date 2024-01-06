import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  const { status, statusText } = err;
  return (
    <div className="flex justify-center items-center text-center h-screen bg-slate-300">
      <div>
        <h1 className="text-2xl mb-2">Ooops!!!!</h1>
        <h2 className="text-xl">Something went Wrong</h2>
        <h2 className="text-red-600">
          {status} {statusText}
        </h2>
      </div>
    </div>
  );
};

export default Error;
