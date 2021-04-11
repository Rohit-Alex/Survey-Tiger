import React, { useState } from "react";
import logo from "./logo.JPG";
import "./Choice.css";
import { useHistory } from "react-router-dom";

function Choice({
  questionOne,
  questionTwo,
  setQuestionOne,
  setQuestionTwo,
  setOption1,
  setOption2,
  setRenderQ1,
  setRenderQ2,
  setDescrip
}) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  const [dropdown, setDropdown] = useState("");
  const [additem, setAdditem] = useState([]);
  const [inputitem, setInputitem] = useState("");
  const [count, setCount] = useState(1);

  const [secondadditem, setSecondadditem] = useState([]);
  const [secinputitem, setSecinputitem] = useState("");
  const handleAddQue1 = () => {
    setOption1(additem);
    setRenderQ1(true);
    setDescrip(true);
    if (count % 2 !== 0) {
      if (dropdown === "1") setDropdown("2");
    else setDropdown("1");
    alert("question added");
  }
    else alert(" click on publish ");
    setCount((prev) => prev + 1);
    
  };
  const handleAddQue2 = () => {
    setOption2(secondadditem);
    setRenderQ2(true);
    setDescrip(true);
    if (count % 2 !== 0) {
      if (dropdown === "1") setDropdown("2");
    else setDropdown("1");
    alert("question added");
  }
    else alert(" click on publish ");
    setCount((prev) => prev + 1);
  };
  return (
    <div class="container">
      <img class="logo_image" src={logo} alt="logo"></img>
      <div class="sub_container">
        <select
          value={dropdown}
          onChange={(e) => {
            setDropdown(e.target.value);
          }}
        >
          <option value="0">Select Question Type</option>
          <option value="1">Multi-select</option>
          <option value="2">Single-select</option>
        </select>
      </div>
      <div class="selected_container">
        {dropdown === "1" && (
          <div class="first_option">
            <div class="question">
              <div>
                <button>?</button>
                <input
                  type="text"
                  value={questionOne}
                  onChange={(e) => setQuestionOne(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="option_container">
              <h4>Options</h4>
              {additem.map((item) => {
                return (
                  <div>
                    <input type="text" value={item}></input>
                    <button type="submit">+</button>
                    <button type="submit">-</button>
                  </div>
                );
              })}
              {additem.length < 4 && (
                <div>
                  <input
                    type="text"
                    placeholder="Type answer here"
                    value={inputitem}
                    onChange={(e) => setInputitem(e.target.value)}
                  ></input>
                  <button
                    id="add"
                    type="submit"
                    onClick={() => {
                      if (inputitem !== "") {
                        setInputitem("");
                        setAdditem([...additem].concat(inputitem));
                      }
                    }}
                  >
                    +
                  </button>
                  <button id="remove" type="submit">
                    -
                  </button>
                </div>
              )}
            </div>
            <div class="ss"></div>
            <div class="button_container">
              {additem.length === 4 && (
                <div>
                  <button class="button_publish" onClick={handleAddQue1}>
                    Add Question
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button class="button_publish" onClick={handleClick}>
                    Publish
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {dropdown === "2" && (
          <div class="first_option">
            <div class="question">
              <div>
                <button>?</button>
                <input
                  type="text"
                  value={questionTwo}
                  onChange={(e) => setQuestionTwo(e.target.value)}
                ></input>
              </div>
            </div>
            <div class="option_container">
              <h4>Options</h4>
              {secondadditem.map((item) => {
                return (
                  <div>
                    <input type="text" value={item}></input>
                    <button type="submit">+</button>
                    <button type="submit">-</button>
                  </div>
                );
              })}
              {secondadditem.length < 2 && (
                <div>
                  <input
                    type="text"
                    placeholder="Type answer here"
                    value={secinputitem}
                    onChange={(e) => setSecinputitem(e.target.value)}
                  ></input>
                  <button
                    id="add"
                    type="submit"
                    onClick={() => {
                      if (secinputitem !== "") {
                        setSecinputitem("");
                        setSecondadditem(
                          [...secondadditem].concat(secinputitem)
                        );
                      }
                    }}
                  >
                    +
                  </button>
                  <button id="remove" type="submit">
                    -
                  </button>
                </div>
              )}
            </div>
            <div class="ss"></div>
            <div class="button_container">
              {secondadditem.length === 2 && (
                <div>
                  <button
                    class="button_publish"
                    onClick={handleAddQue2}
                    // onClick={() => setOption2(secondadditem)}
                  >
                    Add Question
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button class="button_publish" onClick={handleClick}>
                    Publish
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Choice;
