import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Form from "./Components/Form/Form";
import rootReducer from "./store/rootReducer";

const safeJSONObject = "{}";
const persistedState = JSON.parse(
  localStorage.getItem("rockers") || safeJSONObject
);

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState
});

store.subscribe(() => {
  localStorage.setItem("rockers", JSON.stringify(store.getState()));
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Form />
      </div>
    </Provider>
  );
};

export default App;
