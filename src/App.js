import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from "react";
import Choice from "./Components/Choice";
import Description from "./Components/description";

function App() {
  const [questionOne, setQuestionOne] = useState(
    "Which of the following apps you have on your phone?"
  );
  const [questionTwo, setQuestionTwo] = useState(
    "Do you have LinkedIn install on your phone?"
  );
  const [allOption1, setOption1] = useState([]);
  const [allOption2, setOption2] = useState([]);
  const [descrip, setDescrip] = useState(false);
  const [renderQ1, setRenderQ1] = useState(false);
  const [renderQ2, setRenderQ2] = useState(false);
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
              setRenderQ1={setRenderQ1}
              setRenderQ2={setRenderQ2}
              setDescrip={setDescrip}
            />
          </Route>
          {descrip ? (
            <Route eaxct path="/description">
              <Description
                questionOne={questionOne}
                questionTwo={questionTwo}
                allOption1={allOption1}
                allOption2={allOption2}
                renderQ1={renderQ1}
                renderQ2={renderQ2}
              />
            </Route>
          ) : (
            <>
              <h4>No Survey taken yet!!!! Go back and start a survey</h4>
              <Link to="/">
                <button>Go to Homepage</button>
              </Link>
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
