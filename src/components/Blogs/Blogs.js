import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1 className="blog-title">Frequently Ask Question</h1>
      <hr />
      <h3>What is semantic tag?</h3>
      <p>
        Semantic tags are HTML elements that makes easy to understand for human
        and machine to read. As a markup language we generally use 'div' to make
        portion in the web page which look sort of complicated. HTML 5 makes us
        easy to understand by using semantic elements. Some tags like header,
        footer, article, main, nav, section etc are inclusive example of
        semantic tag of HTML using angle brackets. This is not that if we use
        regular HTML elements code doesn't run. It will run. But to the
        developer, it is kind of complicated to find the definite portion. On
        the otherhand, if we use semantic tags, developer will easily find the
        apparent portion. This is why we use semantic tag.
      </p>
    </div>
  );
};

export default Blogs;
