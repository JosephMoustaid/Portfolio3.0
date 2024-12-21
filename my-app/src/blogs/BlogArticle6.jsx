import React from "react";

import natureandinnovation from "../assets/blogImages/natureandinnovation.jpg";

const BlogArticle6 = () => {
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Dive into the wisdom nature offers about innovation and creativity!"
    );

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container py-5">
      <header className="mb-5">

        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="fw-bold text-primary display-4">
            Lessons from Nature: What It Teaches Us About Innovation
            </h1>
            <p className="text-muted">Published on: November 17, 2024</p>
            <p className="lead">
            From the efficiency of ecosystems to the resilience of forests, 
            nature offers endless inspiration for innovation.
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <img
            style={{ position: 'relative' , zIndex:"1"}}
              src={natureandinnovation}
              alt="nature and innovation"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </header>

      <article>
        <p>
          Nature is the ultimate innovator. Every organism, system, and 
          ecosystem evolves to solve problems with remarkable efficiency. As a 
          tech enthusiast, I often ask myself: What can we learn from it?
        </p>
        <p>
          Biomimicry, for example, shows us how to create sustainable solutions 
          by emulating nature’s time-tested patterns. Think about the Velcro 
          inspired by burrs or wind turbines modeled after whale fins. Nature’s 
          designs are simple, elegant, and functional.
        </p>
        <p>
          Beyond design, nature teaches us resilience and adaptability. It’s a 
          reminder that innovation isn’t about perfection—it’s about iteration. 
          Like a tree that grows stronger after a storm, the best ideas emerge 
          through challenge and change.
        </p>
      </article>

      <section className="text-center mt-5" style={{ position: 'relative' , zIndex:"1"}}>
        <h4>Share this article:</h4>
        <button onClick={() => handleShare("twitter")} className="btn btn-primary me-2">Twitter</button>
        <button onClick={() => handleShare("facebook")} className="btn btn-primary me-2">Facebook</button>
        <button onClick={() => handleShare("linkedin")} className="btn btn-primary">LinkedIn</button>
      </section>
    </div>
  );
};

export default BlogArticle6;
