import React, { useState } from "react";

const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    /**
     * у компонента должно быть внутреннее состояние, где мы храним значение счетчика
     * Также, должны быть текстовое поле с этим значением, и 2 кнопки, Добавить и Убавить
     * На кнопки добавить обработчики
     */

    const increment = () => {
        setCount( prev => prev + 1);
    }

    const decrement = () => {
        setCount( (prev) => { return prev - 1; } );
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Subtract</button>
        </div>
    )
};

export default SimpleCounter;