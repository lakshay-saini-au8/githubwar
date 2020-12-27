import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Battle from "./components/Battle";
import Explore from "./components/Explore";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Battle} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </>
  );
}

export default App;
