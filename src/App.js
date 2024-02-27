import "./App.css";
// import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//         <Route path='/' element={<Navbar />}>
//           <Route  path="/Home" element={<Home />} ></Route>
//           <Route path="/About" element={<About />}/>
//           <Route path='/Work' element={<Work />}/>
//           <Route path='/Testimonial' element={<Testimonial />}/>
//           <Route path='/Contact' element={<Contact />}/>
//           <Route path='/Footer' element={<Footer />}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;


