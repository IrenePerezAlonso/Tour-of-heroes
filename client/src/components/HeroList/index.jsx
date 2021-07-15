import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function HeroList({ heroes, dispatch }) {
  const [nameHero, setNameHero] = useState();

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" />
          <button type="button" className="add-button">Add hero</button>
        </label>
      </div>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li>
            <span className="badge">{hero.id}</span>
            {' '}
            {hero.name}
            <button type="button" className="delete" title="delete hero">x</button>
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

function mapStateToProps({ heroes }) {
  return {
    heroes
  };
}

export default connect(mapStateToProps)(HeroList);
