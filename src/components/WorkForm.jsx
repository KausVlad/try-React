export default function WorkForm() {
  return (
    <div className="work-form">
      <h2>Add Work</h2>
      <fieldset>
        <div className="form-row">
          <label htmlFor="title">Position:</label>
          <input type="text" id="title" placeholder="enter new position" />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="enter new description"
          />
        </div>
        <div className="form-row">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" placeholder="enter new company" />
        </div>
        <div className="form-row">
          <label htmlFor="date">Date of employment:</label>
          <input type="text" id="date" placeholder="enter new date" />
        </div>
        <div className="form-row">
          <label htmlFor="link">Link:</label>
          <input type="text" id="link" placeholder="enter new link" />
        </div>
        <button>Add new Work</button>
      </fieldset>
    </div>
  );
}
