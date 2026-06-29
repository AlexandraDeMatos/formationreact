import Button from "../uis/Button/Button";

const App = () => {
  return (
    <>
      <p>Formation React</p>
      <Button onClicked={() => console.log('ok')} children="Validé" color="green"></Button>
      <Button onClicked={() => console.log('cancel')}  children="Annulé" color="tomato" type="reset"></Button>
      <Button onClicked={() => console.log('test')}  color="tomato" type="reset"><img src="favicon.svg" alt="" /></Button>
    </>
  );
};

export default App