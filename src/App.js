import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ImageComponent from "./ImageComponent";
import NavigationComponent from "./NavigationComponent";
const App = () => {
  return (
    <Provider store={store}>
      <div className="carousel">
        <ImageComponent />
        <NavigationComponent />
      </div>
    </Provider>
  );
};

export default App;
