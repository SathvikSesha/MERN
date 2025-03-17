import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function decrease(){
        setCount(count-1)
    }
    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me to increase</button>
            <button onClick={decrease}>Click me to decrease</button>
        </div>
    );
}

export default Counter;
