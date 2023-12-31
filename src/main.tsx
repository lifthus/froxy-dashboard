import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/error";
import NotFoundPage from "./pages/404";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientInfoProvider from "./components/ClientInfoProvider";

// file system routing
const PAGES = import.meta.glob<any>("/src/pages/**/*.tsx", { eager: true });
const pages = Object.keys(PAGES).map((filePath) => {
  const path = filePath
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");
  return { path, component: PAGES[filePath].default };
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      {pages.map(({ path, component: Component = Fragment }, idx) => (
        <Route key={idx} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClientInfoProvider />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
