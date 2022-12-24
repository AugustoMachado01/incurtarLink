import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="container-error">
      <img src="./notfound.jpg" alt="error" />
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para home</Link>
    </div>
  );
};

export default Error;
