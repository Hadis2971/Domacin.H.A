import { Link } from "react-router-dom";

import "./index.scss";

export default () => (
  <div id="footer-container">
    <div>
      <Link to="/shop">Shop</Link>
    </div>
    <div>
      <Link to="/account">Moj Racun</Link>
    </div>
  </div>
);
