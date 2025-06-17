import { useEffect } from "react";
import FormDetails from "../components/Form/FormDetails";
import Home from "../pages/Home";
import JoinTeam from '../pages/JoinTeam';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Program from '../pages/Program';
import ProgramDetails from '../components/Program/ProgramDetails';
import Wildlife from '../pages/Wildlife';
import Privacy from '../pages/Privacy';
import Donate from "../pages/Donate";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router";
import Layout from '../components/Navbar/Layout'
import Footer from '../components/Footer/Footer'


function AppRoutes() {
  // function that will scroll to top evertime page changes
  const ScrollTop = () => {
    const path = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [path]);
  };

  return (
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
  );
}

export default AppRoutes;
