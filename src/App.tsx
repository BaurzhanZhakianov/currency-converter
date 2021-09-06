import React from 'react';
import SearchPanel from "./search-panel";

// <img src="https://www.countryflags.io/be/shiny/64.png">


//https://free.currconv.com/api/v7/countries?apiKey=API_KEY
function App() {
  return (
    <div className="container">
        <select name="from">
            <option value=""></option>
        </select>

      <SearchPanel/>
    </div>
  );
}

export default App;
