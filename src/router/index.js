import React, {Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from "../App";
import Layout from "../Layout"
import Layout2 from "../Layout2"
import Layout3 from "../Layout3"

const routeApp = () => {
  return (
    <Router>
      <Suspense>
        <Switch>
          <Route path="/" exact>
            {/* Đây là cái đường dẫn, */}
            <App />
            {/* đây là vị trí cần nó hiện nội dung đường dẫn tới trang đó */}
          </Route>
          <Route path="/layout">
            <Layout />
          </Route>
          <Route path="/chua">
            <Layout2 />
          </Route>
          <Route path="/co">
            <Layout3 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default React.memo(routeApp);
