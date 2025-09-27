import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CoursesList } from "./Courses/CoursesList";
import { CourseDetail } from "./Courses/CourseDetail";
import Navbar from "./Courses/NavBar";


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
