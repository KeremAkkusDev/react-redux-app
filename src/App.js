//import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import { useSelector } from "react-redux";

function App() {
  //const [counter, setCounter] = useState(0);
  const { dark } = useSelector((state) => state.SiteReducer);
  const theme = dark ? "dark" : "light";
  return (
    <div className="counter">
      <div className={`count ${theme}`}>
        <Header />
        <Counter /* counter={counter} */ />
        <CounterActions /* setCounter={setCounter} */ />
      </div>
    </div>
  );
}

export default App;
