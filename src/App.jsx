import { Routes, Route } from "react-router-dom";
import { Home, Shop, Articles, NoMatch } from "./pages";
import { NavBar } from "./components";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />

      <div id="app-container">
        <div id="app">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
