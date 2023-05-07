import { useState } from 'react';

export default function WorkForm({ handleSubmitComp }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = () => {
    const newWork = {
      id: Math.random(),
      title,
      description,
      name,
      date,
      link,
      current: false,
    };
    handleSubmitComp(newWork);
    setTitle('');
    setDescription('');
    setName('');
    setDate('');
    setLink('');
  };

  return (
    <div className="work-form">
      <h2>Add Work</h2>
      <fieldset>
        <div className="form-row">
          <label htmlFor="title">Position:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="enter new position"
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="enter new description"
          />
        </div>
        <div className="form-row">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter new company"
          />
        </div>
        <div className="form-row">
          <label htmlFor="date">Date of employment:</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="enter new date"
          />
        </div>
        <div className="form-row">
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="enter new link"
          />
        </div>
        <button onClick={handleSubmit}>Add new Work</button>
      </fieldset>
    </div>
  );
}
