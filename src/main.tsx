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

const BASIC = import.meta.glob<any>("/src/pages/(_app|404).tsx", {
  eager: true,
});
const basics: any = Object.keys(BASIC).reduce((basic, filePath) => {
  const key = filePath.replace(/\/src\/pages\/|\.tsx$/g, "");
  return { ...basic, [key]: BASIC[filePath].default };
}, {});

const App = basics?.["_app"] || Fragment;
const NotFoundPage = basics?.["404"] || Fragment;

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
      <Route path="/" element={<App />}></Route>
      {pages.map(({ path, component: Component = Fragment }, idx) => (
        <Route key={idx} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);