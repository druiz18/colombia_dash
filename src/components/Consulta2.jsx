import React, { useState, useEffect } from 'react';

function AtracTuristicas(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const departamentos = {};

                data.forEach(atraccion => {
                    const departmentName = atraccion.city.department.name;
                    const cityName = atraccion.city.name;

                    if (!departamentos[departmentName]) {
                        departamentos[departmentName] = {};
                    }

                    if (!departamentos[departmentName][cityName]) {
                        departamentos[departmentName][cityName] = {
                            attractionsCount: 0,
                            attractions: []
                        };
                    }

                    departamentos[departmentName][cityName].attractionsCount++;
                    departamentos[departmentName][cityName].attractions.push({
                        id: atraccion.id,
                        name: atraccion.name,
                        description: atraccion.description,
                        images: atraccion.images,
                        latitude: atraccion.latitude,
                        longitude: atraccion.longitude,
                    });
                });

                // Convertimos el objeto departamentos en un array estructurado
                const resultado = Object.keys(departamentos).map(departmentName => ({
                    department: departmentName,
                    cities: Object.keys(departamentos[departmentName]).map(cityName => ({
                        city: cityName,
                        attractionsCount: departamentos[departmentName][cityName].attractionsCount,
                        attractions: departamentos[departmentName][cityName].attractions,
                    }))
                }));

                setData(resultado);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Atracciones Turísticas</h1>
            {data.map((department, deptIndex) => (
                <div key={deptIndex}>
                    <h2>{department.department}</h2>
                    {department.cities.map((city, cityIndex) => (
                        <div key={cityIndex}>
                            <h3>{city.city} ({city.attractionsCount} Atracciones)</h3>
                            <ul>
                                {city.attractions.map((attraction, attrIndex) => (
                                    <li key={attrIndex}>
                                        <h4>{attraction.name}</h4>
                                        <p>{attraction.description}</p>
                                        <p>Latitud: {attraction.latitude}, Longitud: {attraction.longitude}</p>
                                        <img src={attraction.images[0]} alt={attraction.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default AtracTuristicas;
