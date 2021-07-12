import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/heroes';

export default function loadHeroes() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_HEROES,
        heroes: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_HEROES_ERROR
      });
    }
  };
}
