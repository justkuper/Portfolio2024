import React, { useState, useEffect } from "react";
import "./RotatingQuotes.css"; // Import your CSS file

const RotatingQuote = () => {
  const quotes = [
    `<span class="quote">“The more I study, the more insatiable do I feel my genius for it to be.”</span> – <span class="quote-author">Ada Lovelace</span>, <span class="italicize">the world’s first computer programmer</span>`,
    `<span class="quote">“You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.”</span> – <span class="quote-author">John Romero</span>, <span class="italicize">video game developer and programmer</span>`,
    `<span class="quote">“This was one of the best parts of being a coder, and an artist: the thrill of being in the middle of creating something delightful. It’s like the anticipation of eating freshly baked bread after its aroma fills the room.”</span> – <span class="quote-author">Dr. Joy Buolamwini</span>, <span class="italicize">Unmasking AI: My Mission to Protect What Is Human in a World of Machines</span>`,
    `<span class="quote">“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.”</span> – <span class="quote-author">Patrick McKenzie</span>, <span class="italicize">software engineer</span>`,
    `<span class="quote">“Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.”</span> – <span class="quote-author">Bill Gates</span>, <span class="italicize">Microsoft co-founder</span>`,
    `<span class="quote">"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</span> ― <span class="quote-author">Martin Fowler</span>, <span class="italicize">software engineer and author</span>`,
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000); // Change quote every 3 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="quote-container">
      <p
        className="quote-text rotating-quote"
        dangerouslySetInnerHTML={{ __html: quotes[currentQuoteIndex] }}
      />
    </div>
  );
};

export default RotatingQuote;
