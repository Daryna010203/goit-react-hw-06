import css from './SearchBox.module.css';

const SearchBox = ({ searchFilter, setSearchFilter }) => {
  return (
    <div className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="search"
        value={searchFilter}
        onChange={evt => setSearchFilter(evt.target.value)}
        autoFocus
        placeholder="search..."
      />
    </div>
  );
};

export default SearchBox;
