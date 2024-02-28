import React from "react";
import test from "../assets/test.jpeg";
const Userprofile = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="photo rounded-circle overflow-hidden">
        <img src={test} alt="" />
      </div>
      <u>Dr. Brian muchake</u>
    </div>
  );
};

export default Userprofile;
