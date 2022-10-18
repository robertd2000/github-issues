import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./query";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </StrictMode>,
  root
);
