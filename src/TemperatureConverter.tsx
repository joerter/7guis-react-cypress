function TemperatureConverter() {
  return (
    <>
      <h2>Temperature Converter</h2>
      <form>
        <input type="text" id="celsius" />
        <label htmlFor="celsius">Celsius</label>
        =
        <input type="text" id="fahrenheit" />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </form>
    </>
  );
}

export default TemperatureConverter;
