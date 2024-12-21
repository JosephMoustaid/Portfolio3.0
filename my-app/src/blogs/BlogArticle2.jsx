import React from "react";


import frustration from "../assets/blogImages/frustration.jpg";


const BlogArticle2 = () => {
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Check out this thoughtful article on embracing failure!"
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
            Embracing Failure as a Path to Growth
            </h1>
            <p className="text-muted">Published on: November 17, 2024</p>
            <p className="lead">
            Failure isn’t the opposite of success—it’s part of the journey. Here’s 
            why I believe we should celebrate our failures.
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <img 
              style={{ position: 'relative' , zIndex:"1"}}
              src={frustration}
              alt="Thinking about AI"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </header>
      


      <article>
        <h2 className="text-primary mb-4">Rethinking Failure</h2>
        <p>
          Growing up, failure felt like a dead end. It was the ultimate "don’t let this happen" scenario—something to avoid at all costs. But over the years, I’ve realized failure is more like a stepping stone, a chance to recalibrate and move forward stronger than before.
        </p>
        <p>
          When I look back, my biggest breakthroughs came after my biggest failures. The job I didn’t get taught me how to interview better. The project that flopped forced me to confront weak points in my skills. Failure, as painful as it feels in the moment, is a teacher like no other.
        </p>

        <h2 className="text-primary mt-5 mb-4">Why We Fear Failure</h2>
        <p>
          Much of our fear of failure comes from societal conditioning. Success is celebrated loudly, while failure is quietly swept under the rug. We’re taught to aim for perfection, but perfection is an illusion. The truth is, failure humanizes us and gives us depth.
        </p>
        <p>
          This fear holds us back. How many ideas go unspoken, risks go untaken, or dreams go unpursued because of the shadow of failure? If we reframe failure as a lesson instead of an endpoint, we free ourselves to explore, experiment, and grow.
        </p>

        <h2 className="text-primary mt-5 mb-4">Lessons Learned Through Failure</h2>
        <ul>
          <li>
            <strong>Resilience:</strong> Every failure makes us stronger. It’s proof that we can endure setbacks and still move forward.
          </li>
          <li>
            <strong>Creativity:</strong> When Plan A fails, we’re forced to think differently. Some of the most innovative ideas come from Plan B—or Plan Z.
          </li>
          <li>
            <strong>Humility:</strong> Failure reminds us that we’re not invincible. It keeps us grounded and fosters empathy for others on their journeys.
          </li>
        </ul>

        <h2 className="text-primary mt-5 mb-4">Turning Failure into Fuel</h2>
        <p>
          Here are some ways to use failure as a springboard:
        </p>
        <ol>
          <li>
            <strong>Reflect and Learn:</strong> Ask yourself what went wrong and what could be improved. Be honest, but don’t be overly critical.
          </li>
          <li>
            <strong>Stay Open:</strong> Sometimes, failure is just redirection. Look for the doors it might be opening instead of focusing on the ones that closed.
          </li>
          <li>
            <strong>Share Your Story:</strong> Talking about failure normalizes it. It can inspire others and create a culture where trying—and failing—is celebrated.
          </li>
        </ol>

        <h2 className="text-primary mt-5 mb-4">A Personal Take</h2>
        <p>
          For me, one of the most transformative moments was a project I poured my heart into that didn’t meet expectations. At first, I was devastated. But as time passed, I realized it had taught me more about resilience and creative problem-solving than any successful endeavor ever could.
        </p>
        <p>
          Failure shaped me. It’s why I take risks today, why I dream bigger, and why I’m unafraid to step into the unknown. If you’re reading this, I hope you’ll take your next failure as a badge of honor—a sign that you’re pushing boundaries and living boldly.
        </p>
      </article>

      <section className="text-center mt-5" style={{ position: 'relative' , zIndex:"1"}}>
        <h4>Share this article:</h4>
        <button onClick={() => handleShare("twitter")} className="btn btn-primary me-2">
          Twitter
        </button>
        <button onClick={() => handleShare("facebook")} className="btn btn-primary me-2">
          Facebook
        </button>
        <button onClick={() => handleShare("linkedin")} className="btn btn-primary">
          LinkedIn
        </button>
      </section>
    </div>
  );
};

export default BlogArticle2;
