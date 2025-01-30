import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader'; // Import your Loader component

// Lazy load your route components
const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Home')), 2000); // 2-second delay
  });
});

const Blog = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Blog')), 2000); // 2-second delay
  });
});

const SingleBlog = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/SingleBlog')), 2000); // 2-second delay
  });
});

const Project = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Project')), 2000); // 2-second delay
  });
});

// Lazy load your route components
const About = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/About')), 2000); // 2-second delay
  });
});

function App() {
  return (
    <Router>
      <div className="App">
        {/* Wrap Routes with Suspense and pass Loader as fallback */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<SingleBlog />} />
            <Route path="/project/:name" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;