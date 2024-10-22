import React from "react";

interface BlogPostProps {
  image: string;
  tag: string;
  author: string;
  date: string;
  comments: number | string;
  title: string;
  description: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ image, tag, author, date, comments, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <article className="page-content">
        <div className="blog-post-img">
          <img src={image} alt="" />
          <div className="blog-tag">
            <a href="#">{tag}</a>
          </div>
        </div>

        <div className="blog-content">
          <div className="post-meta m-15px-b">
            <ul>
              <li>
                <a href="#">
                  <i className="icofont-user-alt-5"></i> {author}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont-calendar"></i> {date}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont-speech-comments"></i> {comments} Comments
                </a>
              </li>
            </ul>
          </div>

          <a href="single-blog.html">
            <h2 className="m-25px-b">{title}</h2>
          </a>
          <p>{description}</p>
          <a className="read-more" href="single-blog.html">
            Read more
          </a>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
