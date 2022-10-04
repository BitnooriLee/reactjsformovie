import React from 'react'
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";


function CoinPrice() {

  
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=300")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []); //Only once 

  return (
  <div>
    <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
    {loading ? <strong>Loading..</strong> : null}
    <select>
    {coins.map((coin)=> (
    <option key= {coin.id}>
        {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD 
        </option>
        ))}
    </select>
  </div>
  );
}


export default CoinPrice;