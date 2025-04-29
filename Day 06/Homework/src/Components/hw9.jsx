const Hw9 = () => {
    const trs = [{name: "Data", age: 17}, {name: "Atuka", age: 16}];

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {
                trs.map((obj, i) => {
                    return (
                        <tr>
                            <td>{obj.name}</td>
                            <td>{obj.age}</td>
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default Hw9;