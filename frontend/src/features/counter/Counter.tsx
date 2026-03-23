import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../app/store.ts";
import {decrement, increment, incrementByAmount, reset} from "./counterSlice.ts";
import './Counter.css';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="counter shadow-sm p-3 mb-5 bg-white rounded">
            <h2>Counter: {count}</h2>
            <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
            <button className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
            <button className="btn btn-success" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            <button className="btn btn-secondary" onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}

export default Counter;
