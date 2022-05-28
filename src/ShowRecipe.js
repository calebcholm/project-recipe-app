import React from "react";

function ShowRecipe({ recipe, index, deleteRecipe }) {
    if (recipe) {
        return (
            <tr id={index}>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} alt={recipe.name} /></td>
                <td className="content_td"><p>{recipe.ingredients}</p></td>
                <td className="content_td"><p>{recipe.preparation}</p></td>
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

export default ShowRecipe;
