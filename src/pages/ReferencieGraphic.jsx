import React from "react";

const ReferenceGraphic = () => {
  return (
    <div className="reference-graphic">
      <div className="bar-container">
        <div className="bar">
          <div className="min-point"></div>
          <div className="achieved-point"></div>
          <div className="max-point"></div>
        </div>
        <div className="labels">
          <div className="label-min">representa la edad mínima a la que debió lograrlo</div>
          <div className="label-achieved">representa la edad a la que lo logró</div>
          <div className="label-max">representa la edad máxima en la que debe lograrlo para estar</div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceGraphic;
