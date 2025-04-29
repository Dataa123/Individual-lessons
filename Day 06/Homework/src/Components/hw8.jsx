const Hw8 = () => {
    const trs = [["Name", "Age"], ["Data", 17], ["Luka", 14], ["Atuka", 16]];

    return (
        <table>
            {
                trs.map((element, i) => {
                    return (
                        <tr>
                            {
                                element.map((element, i) => {
                                    return (
                                        <td>{element}</td>
                                    );
                                })
                            }
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default Hw8;