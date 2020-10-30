import * as types from "./Types";

const initialState = {
  categories: [],
  loading: false,
};

export default function agroReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return { ...state, loading: true };
    case types.SAVE_CATEGORIES:
      break;
    case types.GET_CATEGORIES_ERROR:
      return { ...state, categories: action.categories, loading: false };
    default:
      return { ...state };
  }
}
