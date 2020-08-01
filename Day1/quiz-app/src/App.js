import React from "react";
import "./App.css";

const questions = [
  {
    question: "5!",
    answer: "120",
    openEnded: true
  },
  {
    question: "2!",
    answer: "2",
    options: ["6", "4", "2", "8"],
    openEnded: false
  },
  {
    question: "4!",
    answer: "24",
    options: ["4", "24", "1", "20"],
    openEnded: false
  },
  {
    question: "3!",
    answer: "6",
    openEnded: true
  },
  {
    question: "6!",
    answer: "720",
    openEnded: true
  },
  {
    question: "0!",
    answer: "1",
    options: ["0", "none", "1", "-1"],
    openEnded: false
  }
];

const getRandomIndex = () => {
  return Math.floor(Math.random() * questions.length);
};

function App() {
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(getRandomIndex());
  const [choice, setChoice] = React.useState()

  const checkAnswerOpen = () => {
    text === questions[index].answer
      ? alert("Correct :)")
      : alert("Incorrect :(");
  }

  const checkAnswerRadio = () => {
    choice === questions[index].answer
      ? alert("Correct :)")
      : alert("Incorrect :(");
  };
  
  return (
    <div>
      {console.log('did it render?')}
      <div>{questions[index].question} is equal to: </div>
      {questions[index].openEnded 
      ?
      <div className="openEnded">
        <input
            value={text}
            onChange={event => {
              setText(event.target.value);
            }}
        />
        <button
          onClick={() => {
            setText("");
          }}
        >
          Reset
        </button>
        <button
        type="submit"
        onClick={() => {
          checkAnswerOpen();
          setIndex(getRandomIndex());
          setText("");
        }}
      >
        Sumbit
      </button>
      </div>
      :
      <div>
        <ul style={{listStyleType:'none', padding:'0px'}}>
          {questions[index].options.map((q,i) => 
              <li key={i}>
                <input value={q} type="radio" name='mult' onChange={(e) => setChoice(e.target.value)}/>
                {q}
              </li>
            )}
        </ul>
        <button
          type="submit"
          onClick={() => {
            checkAnswerRadio();
            setIndex(getRandomIndex());
            setChoice();
          }}
        >
          Sumbit
        </button>
      </div>
      }
    </div>
  );
}

export default App;
