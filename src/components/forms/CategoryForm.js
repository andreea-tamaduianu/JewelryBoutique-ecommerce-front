import React from "react";

const CategoryForm = ({ handleSubmit, name, setName }) => {
  console.log(name)
  return(
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Denumire</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
        required
      />
      <br />
      <button className="btn btn-outline-primary">Salveaza</button>
    </div>
  </form>
  )
 
};

export default CategoryForm;
