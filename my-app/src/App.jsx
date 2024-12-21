import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Project from './pages/Project';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route path="/project/:name" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;