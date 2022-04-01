import React from "react";

const Cars = ({ children, color }) => {
  /** Si c'est TRUE alors on renvoie la couleur si c'est FALSE alors on met la couleur Noir par défaut */
  const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: Noir</p>;

  if (children) {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
        className="cars"
      >
        <p>Marque: {children}</p>
        <p>{colorInfo}</p>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "pink",
          width: "400px",
          padding: "10px",
          margin: "5px auto",
        }}
        className="cars"
      >
        <p>PAS DE DONNEES</p>
      </div>
    );
  }
};

export default Cars;
