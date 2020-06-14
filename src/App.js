import React from "react";
import { Layout } from "./layout";
import { Places, Map } from "./components";
import { Provider } from "react-redux";
import rootStore from "./stores";

function App() {
  return (
    <Provider store={rootStore}>
      <Layout mainPanel={Map} rightPanel={Places} />
    </Provider>
  );
}

export default App;
