import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
