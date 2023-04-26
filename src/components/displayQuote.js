import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function DisplayQuote() {
    const [myQuote, setMyQuote] = useState('');
    const [quoteLoading, setQuoteLoading] = useState(true);
    const [quoteError, setQuoteError] = useState(null);

    useEffect(() => {
        const fetchMyQuote = async () => {
          try {
            const res = await axios.get(
              'https://api.api-ninjas.com/v1/quotes?category=happiness',
              {
                headers: {
                  'X-Api-Key': 'MLitwyLPktsfrqe6cSpdzQ==MYn3WHZYciWuim32',
                },
              },
            );
            setMyQuote(res.data[0].quote);
            setQuoteLoading(false);
          } catch (error) {
            setQuoteLoading(false);
            setQuoteError(error.message);
          }
        };
        fetchMyQuote();
      }, []);

  return (
    <div>{myQuote}</div>
  )
}

export default DisplayQuote