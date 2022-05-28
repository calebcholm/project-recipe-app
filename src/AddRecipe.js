import React from "react";

function AddRecipe({ recipe, index, deleteRecipe }) {
    if (recipe) {
        return (
            <tr id={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} /></td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.preparation}</td>
                <td>
                    <button name="delete"
                        id={index}
                        onClick={deleteRecipe}
                    >Delete</button>
                </td>
            </tr>
        );
    };
};

export default AddRecipe;
