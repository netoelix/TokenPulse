import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const port = 3000;

app.get('/getAll', async (req, res) => {
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
    },
  });
  const data = await response.json();
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
