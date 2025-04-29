const Hw3 = () => {
    const object = {
        src: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        alt: "Elephant"
    };

    return (
        <img {...object} />
    );
}

export default Hw3;