import { FormEvent, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h2>Counter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="count">Count:</label>
        <input id="count" type="number" value={count} readOnly />
        <button type="submit">Count</button>
      </form>
    </>
  );
}

export default Counter;
