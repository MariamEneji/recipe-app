import RecipeList from '@/components/recipe-list'
import React from 'react'


async function fetchRecipes(){

  try{

    const apiResponse = await fetch('https://dummyjson.com/recipes');
    const result = await apiResponse.json();

    return result?.recipes

  }
  catch(error){

    throw new Error(error)

  }
}

const Recipes = async () => {

const recipeList = await fetchRecipes();

  return (
    <div>
      <RecipeList recipeList = {recipeList}/>
    </div>
  )
}

export default Recipes
