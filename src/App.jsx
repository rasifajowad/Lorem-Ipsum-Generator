import { useState } from "react";
import data from "./data";

const App = () => {
  const [counter, setCounter] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(counter);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem Ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={counter}
          onChange={(e) => {
            setCounter(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
