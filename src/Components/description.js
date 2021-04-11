import React from "react";

function description({ questionOne, questionTwo, allOption1, allOption2 }) {
  return (
    <div>
      <div>
        <h4>{questionOne}</h4>

        {allOption1.map((item, index) => {
          return (
            <>
              <input type="checkbox" name="option" />
              {item}
              <br />
            </>
          );
        })}
      </div>

      <div>
        <h4>{questionTwo}</h4>
        {allOption2.map((item) => {
          return (
            <>
              <input type="radio" name="opt" />
              {item}
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default description;
