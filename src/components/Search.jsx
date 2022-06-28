const Search = ({ onSearch }) => {
  return (
    <div className="note-search">
      <label htmlFor="search">Cari Note</label>
      <input
        type="text"
        name="search"
        placeholder="🔎︎"
        onKeyUp={(e) => onSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
