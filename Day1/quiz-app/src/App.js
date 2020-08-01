import React from "react";
import "./App.css";


const  questions = [
  {
    question: "5!",
    answer: "120"
  },
  {
    question: "2!",
    answer: "2"
  },
  {
    question: "4!",
    answer: "24"
  },
  {
    question: "3!",
    answer: "6"
  }
]

const getRandomIndex = () => {
  return (Math.floor(Math.random() * questions.length));
}

function App() {
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(getRandomIndex());

  const checkAnswer = () => {
    text === questions[index].answer ? alert("Correct :)") : alert("Incorrect :(")
  }

  return (
    <div>
      <div>{questions[index].question}</div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setText("");
        }}
      >
        Reset
      </button>
      <button type="submit" onClick={() => {
        setIndex(getRandomIndex());
        checkAnswer();
        setText("")
      }
        }>
        Sumbit
      </button>
    </div>
  );
}

export default App;
