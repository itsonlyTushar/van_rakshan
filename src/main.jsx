import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/Navbar/Layout.jsx";
import Home from "./pages/Home";
import JoinTeam from "./pages/JoinTeam";
import Contact from "./pages/Contact";
import Program from "./pages/Program";
import Wildlife from "./pages/Wildlife";
import Footer from "./components/Footer/Footer.jsx";
import ProgramDetails from "./components/Program/ProgramDetails.jsx";
import Blog from "./pages/Blog";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import FormDetails from "./components/Form/FormDetails.jsx";
import Privacy from "./pages/Privacy.jsx";
import Donate from "./components/Donate/Donate.jsx";

// function that will scroll to top evertime page changes
const ScrollTop = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jointeam" element={<JoinTeam />} />
        <Route path="/formDetails" element={<FormDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/program" element={<Program />} />
        <Route
          path="/program-details/:programId"
          element={<ProgramDetails />}
        />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <ScrollTop />
      <Footer />
    </Router>
  </Provider>
);
