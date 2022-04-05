import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="article">
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
      <br />
      <h3>What is context API?</h3>
      <p>
        Context API is react structure. We use it to reduce props-drilling in
        coding to exchange unique data. In our project, when we need to receive
        some data from one state to another through props, it drills. But use of
        context API makes project code simple without drilling. In coding,
        sometime we need to declare child component more as we need. And
        everytime we had to use props to manage data again and again which is
        called props-drilling. If we use context API, it doesn't drill the code.
        So, using context API is much better than props-drill.
      </p>
    </div>
  );
};

export default Blogs;
