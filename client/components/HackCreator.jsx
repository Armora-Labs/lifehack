import React, { useState } from 'react';

const HackCreator = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [user, setUser] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log({ content, category, user });
    const postData = { category, content, user };
    const addHack = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    };
    fetch('/api', addHack)
      .then((response) => response.json())
      .then((postData) => console.log(postData))
      .catch((err) => console.log('Error ', err));
  };

  const handleContentChange = (event) => setContent(event.target.value);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="newHack"
          name="newHack"
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="Add Hack"
        />

        <label htmlFor="categories">Category:</label>
        <select
          id="categories"
          name="categories"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Codesmith">Codesmith</option>
          <option value="Money">Money</option>
          <option value="Time">Time</option>
        </select>
        <button type="submit">Add hack</button>
      </form>
    </div>
  );
};

export default HackCreator;
