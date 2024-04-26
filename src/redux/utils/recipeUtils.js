import { createAsyncThunk } from "@reduxjs/toolkit";
import { APP_ID, APP_KEY } from "../../api/apiConstants";
import fetchData from "../../api/axios";
import {
  extractRecipeData,
  extractSingleRecipeData,
} from "../../utils/helpers";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (queryText = "bell peppers and beef") => {
    try {
      const { data } = await fetchData(
        `?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&q=${queryText}`
      );
      return extractRecipeData(data);
    } catch (error) {
      throw Error("Failed to fetch recipes.");
    }
  }
);

export const fetchSearchRecipe = createAsyncThunk(
  "recipes/fetchSearchRecipes",
  async (searchQuery, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Fetch the recipes and ensure the result is used to fulfill the thunk.
    return dispatch(fetchRecipes(searchQuery)).then(response => {
      // Assuming response is structured correctly, return what is needed for further state update.
      return response.payload;
    });
  }
);
export const fetchSingleRecipe = createAsyncThunk(
  "recipe/fetchSingleRecipes",
  async (recipeId) => {
    try {
      const { data } = await fetchData(
        `/${recipeId}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      return extractSingleRecipeData(data);
    } catch (error) {
      throw Error("Failed to fetch single recipe.");
    }
  }
);
