import "./index.scss";

export default ({ children, topPosition }) => (
  <div id="page-content-container" style={{ top: topPosition }}>
    {children}
  </div>
);
