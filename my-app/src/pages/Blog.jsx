import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import OneBlogCard from '../components/OneBlogCard';
import blogImage1 from '../assets/images/contact.avif'; // Example image path
import blogImage2 from '../assets/images/contact.avif'; // Example image path
import blogImage3 from '../assets/images/contact.avif'; // Example image path
import CustomCursor from '../utilities/CustomCursor';
const blogPosts = [
  {
    title: "My First Blog Post",
    description: "This is a short description of my first blog post. It gives an overview of the content.",
    image: blogImage1,
    link: "https://example.com/blog/my-first-blog-post",
    publishTime: "January 1, 2023"
  },
  {
    title: "Exploring React Hooks",
    description: "An in-depth look at React Hooks and how they can be used to simplify your code.",
    image: blogImage2,
    link: "https://example.com/blog/exploring-react-hooks",
    publishTime: "February 15, 2023"
  },
  {
    title: "CSS Grid vs. Flexbox",
    description: "A comparison of CSS Grid and Flexbox, and when to use each layout system.",
    image: blogImage3,
    link: "https://example.com/blog/css-grid-vs-flexbox",
    publishTime: "March 10, 2023"
  },
  {
    title: "My First Blog Post",
    description: "This is a short description of my first blog post. It gives an overview of the content.",
    image: blogImage1,
    link: "https://example.com/blog/my-first-blog-post",
    publishTime: "January 1, 2023"
  },
  {
    title: "Exploring React Hooks",
    description: "An in-depth look at React Hooks and how they can be used to simplify your code.",
    image: blogImage2,
    link: "https://example.com/blog/exploring-react-hooks",
    publishTime: "February 15, 2023"
  },
  {
    title: "CSS Grid vs. Flexbox",
    description: "A comparison of CSS Grid and Flexbox, and when to use each layout system.",
    image: blogImage3,
    link: "https://example.com/blog/css-grid-vs-flexbox",
    publishTime: "March 10, 2023"
  },
  {
    title: "My First Blog Post",
    description: "This is a short description of my first blog post. It gives an overview of the content.",
    image: blogImage1,
    link: "https://example.com/blog/my-first-blog-post",
    publishTime: "January 1, 2023"
  },
  {
    title: "Exploring React Hooks",
    description: "An in-depth look at React Hooks and how they can be used to simplify your code.",
    image: blogImage2,
    link: "https://example.com/blog/exploring-react-hooks",
    publishTime: "February 15, 2023"
  },
  {
    title: "CSS Grid vs. Flexbox",
    description: "A comparison of CSS Grid and Flexbox, and when to use each layout system.",
    image: blogImage3,
    link: "https://example.com/blog/css-grid-vs-flexbox",
    publishTime: "March 10, 2023"
  },
  // Add more blog posts here
];

function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  const showLessPosts = () => {
    setVisiblePosts((prevVisiblePosts) => Math.max(prevVisiblePosts - 6, 6));
  };

  return (
    <div>
      <CustomCursor />
      <div id="loading-screen">
        <l-ring size="60" color="coral"></l-ring>
        <div className="logoContainer">
          <svg
            className="containerforLoader"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
            height="40"
            width="40"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              className="track"
              fill="none"
              strokeWidth="4"
              pathLength="100"
              d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"
            ></path>
            <path
              className="car"
              fill="none"
              strokeWidth="4"
              pathLength="100"
              d="M29.760000000000005 18.72 c0 7.28 -3.9200000000000004 13.600000000000001 -9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.840000000000002 2.64 c -3.6 0 -6.88 -0.96 -9.76 -2.64 c0 -7.28 3.9200000000000004 -13.52 9.840000000000002 -16.96 c2.8800000000000003 -1.6800000000000002 6.24 -2.64 9.76 -2.64 S26.880000000000003 17.040000000000003 29.760000000000005 18.72 c5.84 3.3600000000000003 9.76 9.68 9.840000000000002 16.96 c -2.8800000000000003 1.6800000000000002 -6.24 2.64 -9.76 2.64 c -3.6 0 -6.88 -0.96 -9.840000000000002 -2.64 c -5.84 -3.3600000000000003 -9.76 -9.68 -9.76 -16.96 c0 -7.28 3.9200000000000004 -13.600000000000001 9.76 -16.96 C25.84 5.120000000000001 29.760000000000005 11.440000000000001 29.760000000000005 18.72z"
            ></path>
          </svg>
        </div>
      </div>

      <Nav />
      <main className="blog container mt-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1>Welcome to My Blog</h1>
            <p>Here you'll find articles on various topics, including web development, programming, and more. Enjoy reading!</p>
          </div>
        </div>
        <div className="row">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <OneBlogCard
                title={post.title}
                description={post.description}
                image={post.image}
                link={post.link}
                publishTime={post.publishTime}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            {visiblePosts < blogPosts.length && (
              <button className="btn btn-primary mr-2" onClick={loadMorePosts}>
                Load More &darr;
              </button>
            )}
            {visiblePosts > 6 && (
              <button className="btn btn-secondary" onClick={showLessPosts}>
                Show Less &uarr;
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;