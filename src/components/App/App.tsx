import Button from "../uis/Button/Button";

const App = () => {
  return (
    <>
      <p>Formation React</p>
      <Button onClick={() => console.log('ok')} text="Validé" color="green"></Button>
      <Button onClick={() => console.log('cancel')}  text="Annulé" color="tomato"></Button>
    </>
  );
};

export default App