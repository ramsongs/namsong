import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Faq from "./routes/Faq";
import Header from "./components/Header";
import "./scss/App.scss";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <main>
          <Route path="/" exact="ture" component={Home}></Route>
          <Route path="/faq" component={Faq}></Route>
        </main>
      </HashRouter>
    </div>
  );
}
