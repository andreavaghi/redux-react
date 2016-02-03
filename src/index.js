import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyBfnUYyHExnU2thTQMb9f-phusTqIjS4ls';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
