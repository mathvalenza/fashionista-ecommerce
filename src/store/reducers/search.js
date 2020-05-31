import { TOGGLE_SHOW_SEARCH } from '../types';

const INITIAL_STATE = {
  showSearch: false
};

export default function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SHOW_SEARCH:
      return {
        ...state,
        showSearch: !state.showSearch
      };
    default:
      return state;
  }
}
