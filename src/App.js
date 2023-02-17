import Header from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
