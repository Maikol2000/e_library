import { FC } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LayOutLeader from "./layouts/LayOutLeader";
import Login from "./container/share/auth/login/Login";
import FageNotFound from "./container/share/fageNotFound/FageNotFound";

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
