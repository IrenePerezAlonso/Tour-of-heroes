import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/heroes';

export function loadHeroes() {
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

export function addHero(hero) {
  return async (dispatch) => {
    const { data } = await axios.post(url, hero);
    dispatch({
      type: actionTypes.ADD_HERO,
      hero: data
    });
  };
}

export function deleteHero(heroId) {
  return async (dispatch) => {
    await axios.delete(`${url}/${heroId}`);
    dispatch({
      type: actionTypes.DELETE_HERO,
      heroId
    });
  };
}

export function updateHero(hero) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${hero.id}`, hero);
    dispatch({
      type: actionTypes.UPDATE_HERO,
      hero: data
    });
  };
}

export function loadHero(hero) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${hero.id}`, hero);
    dispatch({
      type: actionTypes.LOAD_HERO,
      hero: data
    });
  };
}
