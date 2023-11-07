import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./Store.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));
//store.subscribe is a listener function which will be calledback
//everytime any action is performed.

//Provider is called so that the Store is accessible throughout the
//entire application

//we wrap the app tag with the provider tag so that it can be accessed
//in the app.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* added BrowserRouter */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
