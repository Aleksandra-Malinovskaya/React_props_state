const ChildComponent = ({name, count}) =>{
    return (
        <div>
            <p>Hello, {name}!</p>
            <p>Текущий счётчик: {count}</p>
        </div>
    )
}

export default ChildComponent;