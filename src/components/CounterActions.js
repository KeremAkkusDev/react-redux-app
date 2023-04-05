import { useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../stores/CounterSlice";

function CounterActions(/* {setCounter} */) {
  const dispatch = useDispatch();
  return (
    <div>
      {/* <button onClick={()=>{setCounter(prev=>(prev-1))}}>Counter -1</button>
      <button onClick={()=>{setCounter(prev=>(prev+1))}}>Counter +1</button> */}
      <button onClick={() => dispatch(decrement())}>Counter -1</button>
      <button onClick={() => dispatch(increment())}>Counter +1</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>Counter +4</button>
    </div>
  );
}

export default CounterActions;
