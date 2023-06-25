import React, { useState, useEffect } from 'react';
import '../CSS/topic_list.css'

function WordLimit({text, letterLimit}) {
  const [limitedText, setLimitedText] = useState('');

  useEffect(() => {
    let limitedText = text.slice(0, letterLimit);

    if (text.length > letterLimit) {
      limitedText += '...';
    }

    setLimitedText(limitedText);
  }, [text, letterLimit]);

  return <h2>{limitedText}</h2>;
}

export default WordLimit;
