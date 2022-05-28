import './App.css';
import React, { useState } from 'react';
import RecipeCreate from './RecipeCreate';
import RecipeData from './RecipeData';
import RecipeList from './RecipeList';

function App() {
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const [recipes, setRecipes] = useState(RecipeData);
  const handleRecipes = (value) => {
    setRecipes([...recipes, value]);
  };

  const deleteRecipe = (indexToDelete) => setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index !== indexToDelete));

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate handleRecipes={handleRecipes} />
    </div>
  );
}

export default App;
