import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Choice from "./Components/Choice";
import Description from "./Components/description";

function App() {
  const [questionOne, setQuestionOne] = useState(
    "Which of the following apps you have on your phone?"
  );
  const [questionTwo, setQuestionTwo] = useState(
    "Do you have LinkedIn install edon your phone?"
  );
  const [allOption1, setOption1] = useState([]);
  const [allOption2, setOption2] = useState([]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Header} />

          <Route exact path="/choice">
            <Choice
              questionOne={questionOne}
              questionTwo={questionTwo}
              setQuestionOne={setQuestionOne}
              setQuestionTwo={setQuestionTwo}
              setOption1={setOption1}
              setOption2={setOption2}
            />
          </Route>
          <Route eaxct path="/description">
            <Description
              questionOne={questionOne}
              questionTwo={questionTwo}
              allOption1={allOption1}
              allOption2={allOption2}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
