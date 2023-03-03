import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <a href={props.link} target="_blank">
            <img src={props.imgsrc} alt="pic" className="card_img" />
          </a>

          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
