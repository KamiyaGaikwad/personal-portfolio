import React, { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard';
import cat1 from "../assets/img/cat-kitten-pixel-art-pixels.png";

export const fetchPosts = async () => {
    const headers = {
        'Content-Type': 'application/json',
      };;
    const requestBody = {
      query: `query Publication{
        publication(host: "kamiya.hashnode.dev") {
          posts(first: 10) {
            edges {
              node {
                title
                subtitle
                brief
                url
                coverImage{
                    url
                }
              }
            }
          }
        }
      }`
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
    };
  
    const response = await fetch('https://gql.hashnode.com', options);
    const data = await response.json();

    console.log('API response:', data);
  
    const {
      data: {
        publication: {
          posts: { edges },
        },
      },
    } = data;
  
    return edges;
  };

export const HashnodeBlog = () => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchBlogPosts = async () => {
        try {
          const fetchedPosts = await fetchPosts();
          setPosts(fetchedPosts);
        } catch (error) {
          console.error('Error fetching blog posts:', error);
        }
      };
  
      fetchBlogPosts();
    }, []);
  
    return (
      <div className="projects mb-5" id="blogs">
        <div className="heading mb-3">
        <div className="image">
          <img src={cat1} alt="cat" />
        </div>
        <h2>Blogs</h2>
      </div>
        {posts.map((post,index) => (
          <BlogCard key={post.slug} data={post.node} index={index} len={posts.length}/>
        ))}
      </div>
    );
  };

export default HashnodeBlog;
