import React from "react";
import { motion } from "framer-motion";
import ai from "../assets/images/ai.webp";

const BlogArticle1 = () => {
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Check out this reflective article on personal thoughts about AI!"
    );

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* HEADER */}
      <motion.header
        className="mb-5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="row align-items-center">
          <div className="col-lg-7">
            <motion.h1
              className="fw-bold text-primary display-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              My Thoughts on Artificial Intelligence
            </motion.h1>
            <motion.p
              className="text-muted"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Published on: November 17, 2024
            </motion.p>
            <motion.p
              className="lead"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              AI is everywhere, but where is it taking us? Here are my personal
              reflections on its power, challenges, and where I hope it will
              lead us.
            </motion.p>
          </div>
          <motion.div
            className="col-lg-5 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={ai}
              alt="Thinking about AI"
              className="img-fluid rounded shadow"
            />
          </motion.div>
        </div>
      </motion.header>

      {/* ARTICLE */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="row mb-5">
          <div className="col-12">
            <motion.h2
              className="text-primary"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              The Allure of AI
            </motion.h2>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Artificial Intelligence feels like a mirror held up to humanity.
              It reflects our ambitions, creativity, and sometimes, our flaws.
              To me, it’s both exciting and intimidating.
            </motion.p>
          </div>
          <div className="col-12 mt-4">
            <motion.h2
              className="text-primary"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Challenges of the AI Era
            </motion.h2>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              With AI advancing at such a rapid pace, we face critical
              challenges: ethical considerations, data privacy, and the
              potential for job displacement. While it brings immense
              opportunities, it also demands responsible development.
            </motion.p>
          </div>
        </div>
      </motion.article>




      {/* ARTICLE */}
      <motion.article
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 1, duration: 1 }}
      >
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-primary">The Allure of AI</h2>
            <p>
              Artificial Intelligence feels like a mirror held up to humanity. 
              It reflects our ambitions, creativity, and sometimes, our flaws. 
              To me, it’s both exciting and intimidating. I love the idea of
              machines learning to assist us, making everyday life smoother 
              and unlocking solutions to problems we’ve struggled with for 
              decades.
            </p>
            <p>
              But at the same time, I wonder—are we ready for the world AI is 
              building? Are we aware of the trade-offs we’re making when we 
              let algorithms influence our decisions, curate our feeds, and 
              even shape our opinions?
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-md-6">
            <h2 className="text-primary">What Excites Me</h2>
            <p>
              I get excited when I see AI amplifying human creativity. Tools 
              that help generate ideas, automate mundane tasks, or even create 
              art feel like superpowers. For me, AI is most inspiring when it 
              serves as an enabler, giving people the freedom to focus on what 
              truly matters: innovation, expression, and connection.
            </p>
            <p>
              The idea of AI collaborating with humans rather than replacing 
              them is something I strongly resonate with. It’s not about making 
              humans redundant; it’s about making us more capable, helping us 
              see things from perspectives we might never have considered.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h2 className="text-primary">What Worries Me</h2>
            <p>
              My concerns with AI aren’t so much about the technology itself, 
              but how we use it. Are we rushing to implement systems without 
              thinking about their consequences? I’ve seen AI reinforce biases 
              and spread misinformation, and it makes me uneasy. How do we 
              ensure that these systems are ethical, fair, and transparent?
            </p>
            <p>
              There’s also the question of dependency. As AI becomes more 
              embedded in our lives, are we losing our ability to think for 
              ourselves? I fear a future where we rely so heavily on algorithms 
              that we forget how to challenge them.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-primary">Where I Hope We Go</h2>
            <p>
              For me, the ideal future with AI is one where it complements 
              human strengths and compensates for our weaknesses. I want to see 
              AI used to tackle real problems—climate change, healthcare 
              disparities, education gaps—without losing sight of the human 
              element.
            </p>
            <p>
              AI has the potential to make the world fairer, more connected, 
              and more innovative, but only if we’re intentional about how we 
              use it. I hope we focus less on what AI can do and more on what 
              it should do.
            </p>
          </div>
        </div>
      </motion.article>

      {/* SOCIAL SHARING */}
      <motion.section
        className="text-center mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.h4
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Share this article:
        </motion.h4>
        <motion.button
          onClick={() => handleShare("twitter")}
          className="btn btn-primary me-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Twitter
        </motion.button>
        <motion.button
          onClick={() => handleShare("facebook")}
          className="btn btn-primary me-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Facebook
        </motion.button>
        <motion.button
          onClick={() => handleShare("linkedin")}
          className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          LinkedIn
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default BlogArticle1;
