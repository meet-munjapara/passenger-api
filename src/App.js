import "./App.css";
import { Switch, Route } from "react-router-dom";
import EditDetail from "./componets/EditDetail";
import AddDetail from "./componets/AddDetail";
import Home from "./componets/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddDetail} />
        <Route path="/edit/:id" component={EditDetail} />
      </Switch>
    </div>
  );
}

export default App;
