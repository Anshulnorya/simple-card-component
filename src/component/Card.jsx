import React from "react";
import "../styles.css";
import Sdata from "./Sdata";

let Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" />
          <div className="content">
            <span className="span">{props.title}</span>
            <h3 className="h3">{props.sname}</h3>
            <a href="">
              <button>Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
