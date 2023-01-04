import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>7 GUIs</h1>
      <Counter />
      <h2>Temperature Converter</h2>
      <form>
        <input type="text" id="celsius" />
        <label htmlFor="celsius">Celsius</label>
        =
        <input type="text" id="fahrenheit" />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </form>
    </div>
  );
}

export default App;
