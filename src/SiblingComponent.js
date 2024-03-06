import React, {useState} from "react";

const SiblingComponent = () =>{
    const[text, setText] = useState('Первоначальный текст');

    const changeTextToRedev = () =>{
        setText('REDEV');
    }

    return (
        <div>
            <p>Текущий текст: {text}</p>
            <button onClick={changeTextToRedev}>Изменить текст</button>
        </div>
    )
}

export default SiblingComponent;