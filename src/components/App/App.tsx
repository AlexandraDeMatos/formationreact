import { useState } from "react";
import Button from "../uis/Button/Button";

const App:React.FC<undefined> = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Formation React</p>
      <p>Compteur : {counter}</p>

      <Button 
        onClicked={() => {
          setCounter(counter+1);
          console.log(counter);
        }} 
        color="green">
          +1
      </Button>

      <Button 
        onClicked={() => {
          setCounter(counter-1);
          console.log(counter);
        }} 
        color="tomato">
          -1
      </Button>
    </>
  );
};

export default App