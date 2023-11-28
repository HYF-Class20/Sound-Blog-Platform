import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({ setTitle }) {
  const [input, setInput] = useState(null);

  useEffect(() => {
    setTitle(input);
  }, [input]);

  return (
    <div className="input">
      <input
        className="search-bar"
        type="text"
        placeholder="search..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
}
SearchBar.propTypes = {
  setTitle: PropTypes.func.isRequired,
};