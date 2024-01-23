import { useState } from 'react';

interface TesteProps {
  priceAPI: number;
}

function Price(data : TesteProps) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
  };

  const calculateValue = (price: number) => {
    return price * quantity;
  };

  return (
    <div>
      <input type="number" value={ quantity } onChange={ handleChange } />
      <p>
        O valor total é:
        {calculateValue(data.data[0].quote.USD.price).toLocaleString('pt-BR', {
          style: 'currency', currency: 'USD' })}
      </p>
    </div>
  );
}

export default Price;
