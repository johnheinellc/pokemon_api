import React, {useState} from "react";




const PokeApi = ()=>{

    const getPokeApi =()=>{
        console.log("Gotta catch em all")

        fetch("https://pokeapi.co/api/v2/pokemon?/limits=1000")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response.results);
            setPokeBall(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }

    let [pokeBall, setPokeBall] = useState([])







    return(
        <>
        <button className="btn btn-success" onClick={
            getPokeApi
        }
        >Fetch Pokemon</button>

        {
            pokeBall.map((pokemon, index)=>{
                return <div>
                    <h4>* {pokemon.name}</h4>
                </div>
            })
        }
        </>)
}
export default PokeApi;