import { useState, useEffect } from 'react';
import './App.css';

// const Person = (props) => {
//   return (
//     <>
//     {/* <h1>Name: Oluwajomiloju</h1> */}
//     <h1>Name: {props.name}</h1>
//     <h1>Last Name: {props.lastName}</h1>
//     <h1> Age: {props.age}</h1>
//     </>
//   )
// }
const App = () => {
  const name = 'Json';
  const isNameShowing = false;
  const isUserLoggedIn = true;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // alert('Reload')
    setCounter(100);
  }, []);
  return (
    <div className="App">
      {/* <h1>Hello {isNameShowing ? name : 'someone'}! </h1> 
      <h1>Hello {2+2}! </h1> 
      {name ? (
        <>
        <h1>{name}</h1>
        </>
      ) : (
        <>
        <h1>test</h1>
        <h1>There is no name</h1>
        </>
      )
    } */}
    {/* <Person 
      name='Oluwajomiloju' 
      lastName='Olatunji' 
      age={1}
    /> */}

    <button onClick = {() => setCounter ((prevCount) => prevCount-1)}>-</button>
    <h3>{counter}</h3>
    <button onClick = {() => setCounter((prevCount)=>prevCount+1)}>+</button>
    </div>
  );
}

export default App;
 