import { createRoot } from "react-dom/client";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// auth

// ristricted user

const route = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </Provider>
);
