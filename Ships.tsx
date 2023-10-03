import React, { useState, useEffect } from "react";
import Ship from "./ship";

function Ships() {
    const [shipsList, setShipsList] = useState([]);
    const [award, setAward] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout( () => {
            getShipsData();
        },2000)
    }, [])


    const getShipsData = async () => {
        try{
        const data = await fetch(`https://swapi.dev/api/starships/`);
        const shipsData = await data.json();
        setShipsList(getSortedList(shipsData.results));
        setLoading(false);
        }catch(error){
            console.log("Something went wrong, Please try again later..");
        }
    }

    const getSortedList = (list: any) => {
        const validShips = list?.filter(((ship: any) => ship.crew <= 10));
        maxFilms(validShips);
        return validShips.sort((a: any, b: any) => a?.crew - b?.crew)
    }

    const maxFilms = (ships: any) => {
        setAward(ships.reduce((max: any, ship: any) => (ship.films.length > max ? ship.films.length : max), ships[0].films.length));
    }


    return (
        <>
            {loading ?
                (<div className="text-center">
                    <img className="loading" src={require("../assets/loader.gif")} alt="Loading" />
                </div>
                ) : (
                    <div className="d-flex flex-column ships-container">
                        {shipsList?.map((e: any, i) => {
                            return <Ship key={i} ship={e} award={award} index={i}/>
                        })}
                    </div>
                )
            }
        </>
    );
}

export default Ships;
