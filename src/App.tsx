import { FC } from "react";
import "./App.css";
import Login from "./component/share/login/Login";
import { Route, Switch } from "react-router-dom";
import FageNotFound from "./component/share/fageNotFound/FageNotFound";
import LayOutLeader from "./layouts/LayOutLeader";

const App: FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/page-leader">
          <LayOutLeader />
        </Route>

        <Route path={"*"}>
          <FageNotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
