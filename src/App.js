import {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // 랜더링이 끝나면 매번 호출됨
    useEffect(() => {
        console.log("Hello from useEffect")
    });

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 10)}>
                + 10
            </button>
            <button onClick={() => setCount(count + 1)}>
                + 1
            </button>
            <button onClick={() => setCount(0)}>
                reset
            </button>
            <button onClick={() => setCount(count - 1)}>
                - 1
            </button>
            <button onClick={() => setCount(count - 10)}>
                - 10
            </button>
        </div>
    );
}

export default Counter;