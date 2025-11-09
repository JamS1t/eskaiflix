import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />

          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchWord={searchWord} setSearchWord={setSearchWord} />
      </div>
    </main>
  );
};

export default App;
