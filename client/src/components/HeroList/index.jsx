import React from 'react';
import { PropTypes } from 'prop-types';

function HeroList({ heroes, dispatch }) {
  return (
    <>
      <h2>My Heroes</h2>
    </>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};
