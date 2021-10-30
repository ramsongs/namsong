import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Order from "./routes/Order";
import About from "./routes/About";
import Cs from "./routes/Cs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./scss/App.scss";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <main>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/cs" component={Cs}></Route>
          <Route component={ScrollToTop}></Route>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}
