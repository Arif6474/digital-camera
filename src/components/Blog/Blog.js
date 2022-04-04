import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="container">
                <h2 className="context"> What is Context API?</h2>
            <p className="details">React context is a way to manage state globally. Context can share data with multiple components without passing data through props manually. We can use context api to avoid props drilling. We can also keep a shared-state in sync.  React Context is native and simple.</p>
            </div>
            <div className="container">
                <h2 className="context">What is semantic tag?</h2>
                <p className="details">One of the most important features of html5 is its semantics. It makes web pages more informative.By using semantic markup, you help the browser understand the meaning of the content. The benefits of semantic markup are easier code to style with css, more maintainable code, better search engine ranking.</p>
            </div>
        </div>
    );
};

export default Blog;