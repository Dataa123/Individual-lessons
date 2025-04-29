const Hw1 = () => {
    const arr = ["Apple", "Banana", "Cherry"];

    return (
        <ul>
            {arr.map((item, i) => {
                return <li key={`item${i}`}>{item}</li>
            })}
        </ul>
    );
}

export default Hw1;