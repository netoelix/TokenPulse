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
      <h2>Verifique o valor de cada unidade</h2>
      <PriceContainer>
        <input
          className="inputPrice"
          type="number"
          value={ quantity }
          onChange={ handleChange }
        />
        <p>
          O valor total é:
          {' '}
          {calculateValue(data[0].quote.USD.price).toLocaleString('pt-BR', {
            style: 'currency', currency: 'USD' })}
        </p>
      </PriceContainer>
    </>
  );
}

export default Price;
