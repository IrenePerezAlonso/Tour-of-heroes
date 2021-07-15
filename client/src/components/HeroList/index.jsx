import React from 'react';
import { PropTypes } from 'prop-types';

function HeroList({ heroes, dispatch }) {
  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" />
          <button type="button">Add hero</button>
        </label>
      </div>

      <ul>
        {heroes.map((hero) => (
          <li>
            <span>{hero.id}</span>
            {' '}
            {hero.name}
          </li>
        ))}
      </ul>
    </>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};
