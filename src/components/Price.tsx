import { useState } from 'react';
import { PriceContainer } from '../styles/StylePrice';
import { PriceProps } from '../types';

function Price(datas : PriceProps) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const calculateValue = (price: number) => {
    return price * quantity;
  };
  const { data } = datas;

  return (
    <>
      <h1>Check the value of each cryptocurrency.</h1>
      <PriceContainer>
        <input
          className="inputPrice"
          type="number"
          value={ quantity }
          onChange={ handleChange }
        />
        <p>
          The total value is:
          {' '}
          {calculateValue(data.quote.USD.price).toLocaleString('pt-BR', {
            style: 'currency', currency: 'USD' })}
        </p>
      </PriceContainer>
    </>
  );
}

export default Price;
