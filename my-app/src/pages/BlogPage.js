import React from 'react';
import styles from './BlogPage.module.css'; // Importing CSS module

const stories = [
  {
    title: 'Exploring the Uncharted: A Deep Dive into Machine Learning',
    date: '2024-04-25',
    content: 'In this blog post, we delve into the fascinating world of Machine Learning...',
  },
  {
    title: 'Taming the Beast: Mastering React Hooks for Beginners',
    date: '2024-04-20',
    content: 'Feeling overwhelmed by React Hooks? Fear not! This guide will...',
  },
  {
    title: 'Building a Blazing-Fast Website with Next.js',
    date: '2024-04-18',
    content: 'Next.js offers a powerful framework for creating performant web applications...',
  },
];

const BlogCard = ({ story }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card ${styles.blogCard}`}> {/* Using Bootstrap with CSS module for custom styling */}
        <img src="https://via.placeholder.com/300x200" alt={story.title} className={`card-img-top ${styles.cardImage}`} />
        <div className="card-body">
          <h5 className={`card-title ${styles.cardTitle}`}>{story.title}</h5>
          <p className={`card-date ${styles.cardDate}`}>{new Date(story.date).toLocaleDateString()}</p>
          <a href="#" className={`btn btn-primary btn-sm ${styles.readMoreButton}`}>Read More</a>
        </div>
      </div>
    </div>
  );
};

function Blog() {
  return (
    <div className="container mt-5">
      <div className="row">
        {stories.map((story, index) => (
          <BlogCard key={index} story={story} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
