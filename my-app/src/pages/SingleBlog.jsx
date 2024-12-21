import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BlogArticle1 from '../blogs/BlogArticle1';
import BlogArticle2 from '../blogs/BlogArticle2';
import BlogArticle3 from '../blogs/BlogArticle3';
import BlogArticle4 from '../blogs/BlogArticle4';
import BlogArticle5 from '../blogs/BlogArticle5';
import BlogArticle6 from '../blogs/BlogArticle6';

import MorphingBackground from '../effects/MorphingBackground';
import CustomCursor from '../utilities/CustomCursor';

function SingleBlog() {
  const { blogId } = useParams();

  // Map blog ID to components
  const blogComponents = {
    1: <BlogArticle1 />,
    2: <BlogArticle2 />,
    3: <BlogArticle3 />,
    4: <BlogArticle4 />,
    5: <BlogArticle5 />,
    6: <BlogArticle6 />,
  };

  const SelectedBlog = blogComponents[blogId] || (
    <div className="text-center mt-5">
      <h2>Blog Not Found</h2>
      <p>The blog you are looking for does not exist.</p>
    </div>
  );

  return (
    <div>
      <MorphingBackground  style={{zIndex:"0"}}/>
      <CustomCursor />
      <Nav />
      <main className="blog container mt-5 single-blog-page">{SelectedBlog}</main>
      <Footer />
    </div>
  );
}

export default SingleBlog;
