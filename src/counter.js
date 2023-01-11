import React from "react";

export default function Counter () {
  let [count, setCount] = React.useState(0);

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    if(count > 0)
    setCount(count - 1);
    else
    {
     setCount(0);
     alert('Sorry, minimum value is reached');
    }
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <h1>{count}</h1>
        <div className="btn_div">
            <button onClick={increase}>Increase count</button>
            <button onClick={decrease}>Decrease count</button> 
          </div>  
      </div>
    </div>
    </>
  )
}