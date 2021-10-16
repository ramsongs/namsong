import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cs from "./routes/Cs";
import Header from "./components/Header";
import "./scss/App.scss";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <main>
          <Route path="/" exact="ture" component={Home}></Route>
          <Route path="/cs" component={Cs}></Route>
        </main>
      </HashRouter>
    </div>
  );
}
