import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CRUDComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ userId: '', id: '', title: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/albums', newItem);
      setData([...data, response.data]);
      setNewItem({ userId: '', id: '', title: '' });
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleUpdate = async (id, updatedItem) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, updatedItem);
      setData(data.map((item) => (item.id === id ? response.data : item)));
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} - {item.title}{' '}
            <button onClick={() => handleUpdate(item.id, { id: '1', title: 'updated title' })}>
              Update
            </button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Create New Item</h2>
      <form onSubmit={handleCreate}>
        {/* <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} /> */}

        <label htmlFor="title">Email:</label>
        <input type="text" id="title" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CRUDComponent;