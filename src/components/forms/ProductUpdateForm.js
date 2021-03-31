import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs, 
  setArrayOfSubs, 
  arrayOfStones, 
  setArrayOfStones,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    price,
  
    category,
    subs,
    quantity,
    images,
    colors,
    color,
    material,
    materials,
    gemstoneCompositions, 
    gemstoneComposition,
    stonesOptions, 
    stones
  } = values;

  return ( <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><b>Denumire</b></label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><b>Descriere</b></label>
          <textarea
            type="text"
            name="description"
            className="form-control"
            value={description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><b>Pret</b></label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={price}
            onChange={handleChange}
          />
        </div>

        
        <div className="form-group">
          <label><b>Cantitate</b></label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            value={quantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label><b>Culoare</b></label>
          <select
            name="color"
            className="form-control"
            onChange={handleChange}
            value={color}
          >
            
            {colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label><b>Metal</b></label>
          <select
            name="material"
            className="form-control"
            onChange={handleChange}
            value={material}
          >
           
            {materials.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label><b>Pietre componente</b></label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Selectati pietrele:"
            value={arrayOfStones}
            onChange={(value) => setArrayOfStones(value)}
          >
            {stonesOptions.length && stonesOptions.map((s) => (
              <Option key={s.name} value={s.name}>
                {s.name}
              </Option>
            ))}
          </Select>
        </div>
        <br></br>

        <div className="form-group">
          <label><b>Compozitia pietrei</b></label>
          <select
            name="gemstoneComposition"
            className="form-control"
            onChange={handleChange}
            value={gemstoneComposition}
          >
            
            {gemstoneCompositions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

          <div className="form-group">
            <label><b>Categorie</b></label>
            <select
              name="category"
              className="form-control"
              onChange={handleCategoryChange}
              value={selectedCategory ? selectedCategory : category._id}
                >
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
        </div> 

      
       <div>
          <label><b>Subcategorii</b></label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Selectati subcategoriile:"
            value={arrayOfSubs}
            onChange={(value) => setArrayOfSubs(value)}
          >
            {subOptions.length && subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
          </Select>
        </div> 

        <br></br>
        <button className="btn btn-outline-info">Salveaza</button>
      </form>
  )
};

export default ProductUpdateForm;
