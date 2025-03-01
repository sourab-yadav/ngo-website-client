import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Programs from "./pages/Programs";
// import Education from "./pages/Education";
// import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          {/* <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/education" element={<Education />} />
          <Route path="/gallery" element={<Gallery />} /> */}
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
