import { useSelector } from "react-redux";

function Counter(/* { counter } */) {
  const counter = useSelector((state) => state.CounterReducer.value);
  return <div> {counter} </div>;
}

export default Counter;
