import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import './Searchbar.css';
import { BsSearch } from 'react-icons/bs';

function Searchbar({ onSubmit }) {
  const [newQuery, setNewQuery] = useState('');

  const handleQueryChange = e => {
    const { value } = e.currentTarget;
    setNewQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ newQuery });
  };

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <BsSearch />
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={'SearchForm-input'}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleQueryChange}
            value={newQuery}
          />
        </form>
      </header>
    </>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
