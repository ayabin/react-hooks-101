import React,{useState} from 'react';

const App=()=>{
  const [count,setCount]=useState(0);
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  const reset=()=>setCount(0);
  const mulitple=()=>setCount(count*2);
  const devide3=()=>{
    if(count%3===0){
      setCount(count/3);
    }
  }
  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={mulitple}>x2</button>
        <button onClick={devide3}>３の倍数の時だけ３で割る</button>
      </div>
    </>
  );
}

export default App;
