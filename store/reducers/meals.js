import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingFav = state.favoriteMeals.find(
        (meal) => meal.id === action.payload
      );
      if (existingFav) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== action.payload
          ),
        };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    default:
      return state;
  }
}

export default reducer;
