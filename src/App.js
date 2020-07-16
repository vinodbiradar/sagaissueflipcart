import React from "react";
import Layout from "./Components/Layouts/index";
import Route from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Layout>
            <Route />
          </Layout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
