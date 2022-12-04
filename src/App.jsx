import { Routes, Route } from "react-router-dom";
import { Home, Shop, Articles, NoMatch } from "./pages";

import "./App.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/articles" element={<Articles />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
