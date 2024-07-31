import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleBackClick = () => {
    setSelectedUser(null);
    setPosts([]);
  };

  return (
    <div className="app-container">
      <h1>Umi React Assignment</h1>
      {loading ? <div>Loading...</div> : (
        selectedUser ? (
          <UserDetail user={selectedUser} posts={posts} onBackClick={handleBackClick} />
        ) : (
          <UserList users={users} onUserClick={handleUserClick} />
        )
      )}
    </div>
  )
};

export default App;
