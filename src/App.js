import React, { useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [buttonText, setButtonText] = useState('0');
  
  
  function count1(){
    setCount(count + 1)
    setTotalCount(totalCount + 1)
  }
  function count2(){
    // count>0?setCount(count-1):count
    // setTotalCount(totalCount + 1)
    setCount(count - 1)
    setTotalCount(totalCount + 1)
  }
  useEffect(() => {
    //Update the document title using the browser API
    document.title = `You clicked ${totalCount} times`;
    if(count>0){
      setButtonText('-1')
    }
    else if(count ==0){
      setButtonText('0')
    }
    else{
      count
    }
    
    });
  console.log(count);
    return (
    <div>
      <p>You clicked {totalCount} times</p>
      <p>Counter {count}</p>
      <button onClick={() => count1()}>+1</button>
      <button onClick={() => count2()}>{buttonText}</button>
      
    </div>
    
  );
  // const [count, setCount] = useState(0);

  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       Click me
  //     </button>
  //   </div>
  // );
  
}

export default App;
