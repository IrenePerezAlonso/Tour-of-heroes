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
        </label>
      </div>
    </>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};
