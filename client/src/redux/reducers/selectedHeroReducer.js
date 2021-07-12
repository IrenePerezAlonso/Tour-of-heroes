import actionTypes from '../actions/actionTypes';

function selectedHeroReducer(heroes = {}, action) {
  if (action.type === actionTypes.LOAD_HERO) {
    return action.hero;
  }
  return heroes;
}

export default selectedHeroReducer;
