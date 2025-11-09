const Search = ({ searchWord, setSearchWord }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />
        <input 
          type="text" 
          placeholder="Search through thousands of movies"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
