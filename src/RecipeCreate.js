import React, { useState } from "react";

function RecipeCreate({ handleRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRecipes(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <thead>
          <tr>
            <th>
              <label htmlFor="name">Name</label>
            </th>
            <th>
              <label htmlFor="cuisine">Cuisine</label>
            </th>
            <th>
              <label htmlFor="photo">Photo</label>
            </th>
            <th>
              <label htmlFor="ingredients">Ingredients</label>
            </th>
            <th>
              <label htmlFor="preparations">Preparation</label>
            </th>
            <th>
              <label htmlFor="actions">Actions</label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="url"
                id="photo"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
