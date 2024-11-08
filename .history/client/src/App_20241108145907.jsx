import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Disclaimer from "./pages/Disclaimer";
import Linux from "./pages/Linux";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TermsAndConditions from "./pages/TermsAndConditions";
import Windows from "./pages/Windows.Jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/linux" element={<Linux />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/windows" element={<Windows />} />
      </Routes>
    </BrowserRouter>
  );
}
