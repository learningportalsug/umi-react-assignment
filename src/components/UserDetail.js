import React from 'react';
import PostList from './PostList';

const UserDetail = ({ user, posts, onBackClick }) => {
    return (
        <div className='page-container'>
            <h2>Posts by {user.name}</h2>
            <div className="user-detail">
                <div></div>
                <div className="left-panel">
                    <button onClick={onBackClick}>Back</button>
                    <div className="user-info">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className="posts-section">
                    <p style={{ textAlign: 'right' }}>Number of posts: {posts.length}</p>
                    <PostList posts={posts} />
                </div>
            </div>
        </div>
    );
};

export default UserDetail;