import React, { useState } from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  const [isReversed, setIsReversed] = useState(false);

  const handleReverseClick = () => {
    setIsReversed(!isReversed);
  };

  const displayedPosts = isReversed ? [...posts].reverse() : posts;

  return (
    <div className="post-list">
      {displayedPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      <button onClick={handleReverseClick}>
        {isReversed ? 'Reverse to Original Order' : 'Reverse Order'}
      </button>
    </div>
  );
};

export default PostList;