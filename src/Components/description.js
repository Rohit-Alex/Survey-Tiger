import React from "react";
import "./description.css";

function description({ questionOne, questionTwo, allOption1, allOption2 }) {
  return (
    <div className="container_des">
      <h1>Question Description</h1>
      <div className="subone">
        <h4>{questionOne}</h4>

        {allOption1.map((item, index) => {
          return (
            <>
              <div className="item">
                <input type="checkbox" />
                {item}
              </div>
              <br />
            </>
          );
        })}
      </div>

      <div className="subone">
        <h4>{questionTwo}</h4>
        {allOption2.map((item) => {
          return (
            <>
              <div className="item">
                <input type="radio" name="radio" />
                {item}
              </div>

              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default description;
