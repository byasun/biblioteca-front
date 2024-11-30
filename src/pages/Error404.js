import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! A página que você está procurando não foi encontrada.</p>
      <button className="error-button" onClick={handleBackToHome}>
        Voltar para a Home
      </button>
    </div>
  );
};

export default Error404;
