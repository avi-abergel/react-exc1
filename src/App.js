import "./App.css";
import { ListOfCards, HeaderComponent } from "./components/index";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <ListOfCards />
    </div>
  );
}

export default App;
