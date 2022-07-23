import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";
import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
