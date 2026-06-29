import { useEffect, useState } from "react";
import Button from "../uis/Button/Button";

const App:React.FC<undefined> = () => {
  const [counter, setCounter] = useState(0);

  useEffect (() => {
    console.log(counter);
  }, [counter]);

  useEffect (() => {
    setCounter(10);
  }, []);

  return (
    <>
      <p>Formation React</p>
      <p>Compteur : {counter}</p>

      <Button 
        onClicked={() => {
          setCounter(counter+1);
        }} 
        color="green">
          +1
      </Button>

      <Button 
        onClicked={() => {
          setCounter(counter-1);
        }} 
        color="tomato">
          -1
      </Button>
    </>
  );
};

export default App