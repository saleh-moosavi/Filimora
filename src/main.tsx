import "./index.css";
import store from "./redux/store";
import { StrictMode } from "react";
import { router } from "./router.tsx";
import { Provider } from "react-redux";
import "keen-slider/keen-slider.min.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
