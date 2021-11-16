import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import styles from "./App.module.css";
function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <Day />
    </div>
  );
}

export default App;
