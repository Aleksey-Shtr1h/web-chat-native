import React from "react";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { rootReducer } from "./src/redux/rootRaducer";

import { App } from "./src/components/App/App";

import { OperationUser } from "./src/redux/user/userReducer";
import { Text } from "react-native";

const store = createStore(rootReducer, applyMiddleware(thunk));

export const InitionalApp = () => {
  store.dispatch(OperationUser.userAuthCheck());
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
