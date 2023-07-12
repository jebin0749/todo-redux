import React from "react";
import Companycss from "./Company.module.scss";

const Company = ({ name }) => {
  return <h1 className={Companycss.companyName}>{name}</h1>;
};

export default Company;
