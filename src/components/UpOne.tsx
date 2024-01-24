import { useState } from 'react';
import { UpOneContainer } from '../styles/StyleUpOne';
import { TableProps } from '../types';
import Table from './Table';

function UpOne({ data, handleFavorite, favorites }: TableProps) {
  const [selectedValue, setSelectedValue] = useState('percent_change_1h');

  const topFive = [...data].sort((a, b) => b
    .quote.USD[selectedValue] - a.quote.USD[selectedValue]).slice(0, 5);

  return (
    <UpOneContainer>
      <h1>The highest values in:</h1>
      <select
        value={ selectedValue }
        onChange={ (e) => setSelectedValue(e.target.value) }
      >
        <option value="percent_change_1h">1h Change</option>
        <option value="percent_change_24h">24h Change</option>
        <option value="price">Price</option>
      </select>
      <Table
        data={ topFive }
        handleFavorite={ handleFavorite }
        favorites={ favorites }
      />
    </UpOneContainer>
  );
}

export default UpOne;
