import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home";
import Rooms from "./Pages/Rooms/Rooms";
import Service from "./Pages/Service/Service";
import LogIn from "./Pages/SignUp&LogIn/LogIn";
import SignUp from "./Pages/SignUp&LogIn/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/services" element={<Service />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
