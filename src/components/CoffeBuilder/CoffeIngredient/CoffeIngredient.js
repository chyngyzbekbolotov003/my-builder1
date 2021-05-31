import classes from "./CoffeIngredient.module.css";
import any from "../../../images/any.svg";
import cola from "../../../images/cola.svg";
import green from "../../../images/green.svg";
import orange from "../../../images/orange.svg";
import pepsi from "../../../images/pepsi.svg";
import rose from "../../../images/rose.svg";
import React from "react";

const CoffeIngredient = ({ type }) => {
  const types = {
    any: {
      backgroundImage: `url(${any})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    cola: {
      backgroundImage: `url(${cola})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    green: {
      backgroundImage: `url(${green})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    orange: {
      backgroundImage: `url(${orange})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    pepsi: {
      backgroundImage: `url(${pepsi})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
    rose: {
      backgroundImage: `url(${rose})`,
      backgroundSize: "cover",
      width: "50px",
      height: "50px",
      marginTop: "8px",
    },
  };

  return <div className={classes.CoffeIngredient} style={types[type]}></div>;
};

export default React.memo (CoffeIngredient);
