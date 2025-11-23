import App from "./App";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const Category = lazy(() => import("./pages/Category"));
const DcmaPage = lazy(() => import("./pages/DcmaPage"));
const MovieItem = lazy(() => import("./pages/MovieItem"));
const PremiumPage = lazy(() => import("./pages/PremiumPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const QuestionsPage = lazy(() => import("./pages/QuestionsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <MovieItem />,
      },
      {
        path: "category/:id",
        element: <Category />,
      },
      {
        path: "dcma",
        element: <DcmaPage />,
      },
      {
        path: "premium",
        element: <PremiumPage />,
      },
      {
        path: "questions",
        element: <QuestionsPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
