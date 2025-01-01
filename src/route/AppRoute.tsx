import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Github, LinkedIn } from "../pages/Redirection";
import Cv from "../pages/Cv";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/linkedin" element={<LinkedIn />} />
      <Route path="/github" element={<Github />} />
      <Route path="/cv" element={<Cv />} />
    </Routes>
  );
}
