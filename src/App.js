import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route>
            <EmptyPage></EmptyPage> //제일 밑에 적어야함. 맨 위에 적으면 모든
            페이지가 잘못된 페이지로 감.
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
