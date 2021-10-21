import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Order from "./routes/Order";
import About from "./routes/About";
import Cs from "./routes/Cs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/App.scss";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <main>
          <Route path="/" exact="ture" component={Home}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/cs" component={Cs}></Route>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}
