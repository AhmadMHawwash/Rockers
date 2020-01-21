import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;
