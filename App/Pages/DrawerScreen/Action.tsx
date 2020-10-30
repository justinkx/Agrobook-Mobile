import * as types from "./Types";

export const getCategories = () => ({
  type: types.GET_CATEGORIES,
});

export const saveCategories = () => ({
  type: types.SAVE_CATEGORIES,
});

export const getCategoriesError = () => ({
  type: types.GET_CATEGORIES_ERROR,
});
