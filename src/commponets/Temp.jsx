import React, { useState, useEffect } from "react";

const Temp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=676e18e6fd6c68bf22320184b59022bf`;
            const response = await fetch(url);

            const resJson = await response.json();
            setCity(resJson.main);
        };

        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputdata">
                    <input type="search" className="inputFeild" value={search} onChange={(event) => {
                        setSearch(event.target.value)
                    }} />
                </div>

                {!city ? (
                    <p className="errormsg">No data found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i class="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">{city.temp}°Cel</h1>
                            <h3 className="tempmin_max">Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
                        </div>

                        <div className="wave -one"></div>
                    </div>
                )
                }
            </div>
        </>
    );
};

export default Temp;