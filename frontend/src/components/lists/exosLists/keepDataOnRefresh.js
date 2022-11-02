import { useEffect, useState } from "react";

export function HamstringsExosList({ hamstringsExos }) {
  const [count, setCount] = useState(1);
  //case 1
  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);
  //case 2
  const [selectedOption, setSelectedOption] =
    useState <
    number >
    (() => {
      return parseInt(sessionStorage.getItem("selectedOption") || "1");
    });

  const handleOnChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
    sessionStorage.setItem("selectedOption", e.target.value);
  };
  return (
    <div>
      {/* case 1 */}
      <div className="">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      {/* case 2 */}
      <select onChange={handleOnChange} value={selectedOption}>
        <option value="5">Five</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
}
