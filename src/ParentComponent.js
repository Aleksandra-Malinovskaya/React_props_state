import React, {useState} from 'react';
import ChildComponent from './ChildComponent';
import SiblingComponent from './SiblingComponent';

const ParentComponent = () =>{
    const [counter, setCounter] = useState(0);

    const inctement = () =>{
        setCounter(counter + 1);
    }

    const reset = () =>{
        setCounter(0)
    }

    const randomcount = () =>{
        setCounter(Math.ceil(Math.random() * 10));
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    const name = "Aleksandra";
    
    return (
        <div>
            <p>Результат счётчика: {counter}</p>
            <button onClick={inctement}>Увеличить</button>
            <button onClick={reset}>Сброс</button>
            <button onClick={randomcount}>Рандомное значение</button>
            <button onClick={decrement}>Уменьшить</button>
            <ChildComponent name={name} count ={counter}/>
            <SiblingComponent/>
        </div>
    )
}
export default ParentComponent;