import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import ReposList from "./ReposList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h1>Search for the package</h1>
      <ReposList />
    </Provider>
  );
};

export default App;
