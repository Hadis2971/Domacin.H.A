import { Suspense } from "react";
import GridLoader from "react-spinners/GridLoader";

import "./index.scss";

export default ({ children, ...rest }) => {
  return (
    <Suspense
      fallback={
        <div className="grid-loader-container">
          <GridLoader color="#e91e63" {...rest} />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};
