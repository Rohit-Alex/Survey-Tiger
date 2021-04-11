import React from "react";
import "./Description.css";
import { Link } from "react-router-dom";

function description({
  questionOne,
  questionTwo,
  allOption1,
  allOption2,
  renderQ1,
  renderQ2
}) {
  return (
    <div className="container_des">
      <h1>Question Description</h1>
      {renderQ1 && (
        <>
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
        </>
      )}

      {renderQ2 && (
        <>
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
        </>
      )}
      <div>
        <Link to="/">
          <button className="btn">Confirm</button>
        </Link>
      </div>
    </div>
  );
}

export default description;
