import React, { useState, useEffect } from "react";

function Consulta(url, ) {
    const [data, setData] = useState([]);
    const [isAscending, setIsAscending] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const partidos = {};

                data.forEach((presidente) => {
                    const partido = presidente.politicalParty;
                    if (partidos[partido]) {
                        partidos[partido]++;
                    } else {
                        partidos[partido] = 1;
                    }
                });
                const res = Object.keys(partidos)
                    .map((partido) => ({
                        partido: partido,
                        presidentes: partidos[partido],
                    }))
                    .sort((a, b) =>
                        isAscending
                            ? a.presidentes - b.presidentes
                            : b.presidentes - a.presidentes
                    );
                setData(res);
            })

            .catch((error) => console.error("Error fetching data:", error));
    }, [isAscending]);

    const toggleOrder = () => {
        setIsAscending(!isAscending);
    };

    return (
        <div>
            <h1>Presidentes por Partido Político</h1>
            <button onClick={toggleOrder}>
                Ordenar {isAscending ? "Descendente" : "Ascendente"}
            </button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Partido</th>
                        <th>Número de Presidentes</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.partido}</td>
                            <td>{item.presidentes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Consulta;