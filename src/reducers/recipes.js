import { SAVE_RECIPES } from '../actions/recipes';

const initialState = {
  listRecipes: [],
  loading: true,
};

const recipesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        listRecipes: action.recipes,
        loading: false,
      };

    default: return state;
  }
};

export default recipesReducer;
