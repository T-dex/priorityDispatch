import {generate} from 'random-words'
import React, { useState } from 'react';

interface SearchComponentProps {
  onSubmit: (url: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState<string| string[]>('');

  const urlStr = 'https://api.giphy.com/v1/gifs/'

  const searchData = () => {
    const fetchURL = `${urlStr}search?api_key=${import.meta.env.VITE_GIPHY_API}&q=${url}`
    onSubmit(fetchURL);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchData()
  };

  const randomMemes = () => {
    const randomWord = generate()
    setUrl(randomWord)
    searchData()
  }

  return (
    <div className='flex items-center justify-between w-full gap-4 sticky top-0 left-0'>
    <h1>Giph Finder</h1>
    <form onSubmit={handleSubmit} className='flex gap-4 rounded-b-md'>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        />
      <button type="submit">Fetch Data</button>
      <button onClick={randomMemes}>Random!</button>
    </form>
    </div>
  );
};

export default SearchComponent;
