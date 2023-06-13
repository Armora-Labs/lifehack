import React, { useState } from 'react';

const HackCreator = ({user}) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Codesmith');


  // Event handler for add new hack form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const u = user.username;
    // console.log('content', content, 'category', category, 'user', u);
    // console.log('this is user', user)
    // console.log({ content, category, user });
    const postData = { category, content, user: user.username};
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
