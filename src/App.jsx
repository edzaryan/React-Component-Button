import styles from "./App.module.css";
import Button from "./components/Button";

const App = () => {

  const handleClick = () => {
    console.log("Something");
  }
  
  return (
    <div className={styles.app}>
      <Button
        size="lg"
        radius="lg"
        color="orange"
        variant="light"
        // isDisable={false}
        onClick={handleClick}>
        Something
      </Button>
    </div>
  );
}

export default App;
