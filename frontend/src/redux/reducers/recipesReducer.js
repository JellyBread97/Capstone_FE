import { FETCH_COCKTAILS, SAVE_COCKTAIL, SAVE_ING } from "../actions";

const initialState = {
  recipes: [],
  cocktail: {},
  ings: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAILS:
      return { ...state, recipes: action.payload };
    case SAVE_COCKTAIL:
      return { ...state, cocktail: action.payload };
    case SAVE_ING:
      return { ...state, ings: action.payload };
    default:
      return state;
  }
};

export default recipesReducer;
