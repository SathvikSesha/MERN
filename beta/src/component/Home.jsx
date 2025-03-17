import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ hero }) {
  const [count, setCount] = useState(0);

  return (
    <div>

      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>

      <h1><Link to='/about'>{hero.name}</Link></h1>
      <p>Suit: {hero.suit}</p>
      <p>Power: {hero.power}</p>
      <Link to='/counter'>Counter</Link>
      <Link to='/EvenOdd'>EvenOdd</Link>
    </div>
  );
}

export default Home;
