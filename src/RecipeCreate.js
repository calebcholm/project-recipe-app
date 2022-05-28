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
        <tbody>
          <tfoot>
            <tr>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  placeholder="URL"
                  value={formData.photo}
                  onChange={handleChange}
                />
              </td>
              <td>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                />
              </td>
              <td>
                <textarea
                  id="preparation"
                  name="preparation"
                  placeholder="Preparation"
                  value={formData.preparation}
                  onChange={handleChange}
                />
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tfoot>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
