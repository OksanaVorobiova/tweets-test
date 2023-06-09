import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("../HomePage/Home"));
const Tweets = lazy(() => import("../Tweets/Tweets"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
