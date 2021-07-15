import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addHero, deleteHero } from '../../redux/actions/actionCreator';

function HeroList({ heroes, dispatch }) {
  const [nameHero, setNameHero] = useState();

  function getName(event) {
    setNameHero(event.target.value);
  }

  function handleName() {
    dispatch(addHero({ name: nameHero }));
  }

  function deleteHeroes(id) {
    dispatch(deleteHero(id));
  }

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">
          Hero name:
          <input id="new-hero" onChange={getName} />
          <button type="button" className="add-button" onClick={handleName}>Add hero</button>
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
