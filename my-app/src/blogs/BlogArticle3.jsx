import React from "react";

import minimalism from "../assets/blogImages/minimalism.jpg";

const BlogArticle3 = () => {
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Discover the power of minimalism in this insightful blog!"
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
            Why Minimalism Matters
                        </h1>
            <p className="text-muted">Published on: November 17, 2024</p>
            <p className="lead">
            In a world of endless options, choosing less can lead to more clarity, 
            purpose, and happiness.
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <img
              style={{ position: 'relative' , zIndex:"1"}}
              src={minimalism}
              alt="Minimalism"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        </header>

        <article>
            <h2 className="text-primary mb-4">What is Minimalism?</h2>
            <p>
            Minimalism isn’t just about decluttering your home—it’s about simplifying your 
            mind, your schedule, and your priorities. It’s a way of intentionally focusing 
            on what truly matters while letting go of the excess that weighs you down.
            </p>

            <h2 className="text-primary mt-5 mb-4">The Benefits of Minimalism</h2>
            <p>
            Minimalism has been transformative in my life. Here are some of the key 
            benefits I’ve experienced:
            </p>
            <ul>
            <li>
                <strong>Clarity:</strong> Removing physical and mental clutter helps you see your 
                goals and values more clearly.
            </li>
            <li>
                <strong>Freedom:</strong> The less you own, the less you have to manage. This creates 
                more time and energy for the things that truly matter.
            </li>
            <li>
                <strong>Focus:</strong> A minimalist lifestyle encourages you to invest your attention 
                where it has the greatest impact.
            </li>
            <li>
                <strong>Joy:</strong> When you stop chasing “more,” you appreciate what you already have.
            </li>
            </ul>

            <h2 className="text-primary mt-5 mb-4">How to Start</h2>
            <p>
            If life feels overwhelming, maybe it’s time to simplify. Minimalism isn’t 
            an all-or-nothing approach—it’s a journey. Here are some small steps to begin:
            </p>
            <ol>
            <li>
                <strong>Declutter Your Space:</strong> Start with one drawer or one corner of a room. 
                Ask yourself, “Does this add value to my life?”
            </li>
            <li>
                <strong>Say No to Distractions:</strong> Evaluate your commitments. Are there activities 
                or obligations that don’t align with your priorities?
            </li>
            <li>
                <strong>Focus on Quality:</strong> Instead of owning many things, invest in fewer, better 
                items that serve a purpose and bring joy.
            </li>
            </ol>

            <h2 className="text-primary mt-5 mb-4">A Personal Journey</h2>
            <p>
            For me, minimalism means saying no to distractions and yes to what aligns 
            with my values. I’ve found that the less I have, the freer I feel. It’s not 
            about achieving perfection but about being intentional. 
            </p>
            <p>
            Letting go of what no longer serves me—be it objects, commitments, or even 
            outdated mindsets—has created space for meaningful experiences, relationships, 
            and personal growth. Minimalism is a choice I make every day, and it has been 
            life-changing.
            </p>
        </article>

        <section className="text-center mt-5" style={{ position: 'relative' , zIndex:"1"}}>
            <h4>Share this article:</h4>
            <button
            onClick={() => handleShare("twitter")}
            className="btn btn-primary me-2"
            >
            Twitter
            </button>
            <button
            onClick={() => handleShare("facebook")}
            className="btn btn-primary me-2"
            >
            Facebook
            </button>
            <button
            onClick={() => handleShare("linkedin")}
            className="btn btn-primary"
            >
            LinkedIn
            </button>
        </section>
    </div>

  );
};

export default BlogArticle3;
