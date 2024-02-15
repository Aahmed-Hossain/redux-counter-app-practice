import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementBy5, reset } from './counter/CounterSlice';

function App() {
  const dispatch =  useDispatch();
  const count = useSelector((state)=> state.counter.count);

  return (
  <div>
    <h1 className="text-5xl font-bold text-center mt-12">Counter App</h1>
    <p className="text-5xl font-bold text-center mt-12">Count:{count}</p>
    <div className="text-xl  text-center mt-4 font-semibold"> 
      <button onClick={() => dispatch(increment())}  className=" bg-red-100 p-2 rounded-md m-4">Increment</button>
      <button onClick={() => dispatch(decrement())}  className=" bg-green-100 p-2 rounded-md m-4">Decrement</button>
      <button onClick={() => dispatch(incrementBy5(5))} className=" bg-yellow-100 p-2 rounded-md m-4">Increment by 5</button>
      <button onClick={() => dispatch(reset())} className=" bg-blue-100 p-2 rounded-md m-4">Resent</button>
    </div>
  </div>
  )
}
export default App;
