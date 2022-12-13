import { Routes, Route } from "react-router-dom";

import StateContext from "./state";
import { Home, Shop, Articles, NoMatch } from "./pages";
import { NavBar } from "./components";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <StateContext>
      <div id="app-container">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </StateContext>
  );
}

export default App;
