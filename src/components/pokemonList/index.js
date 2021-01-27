import React, { useState, useEffect } from 'react';
import { getPokemonList } from '../../api/api';
import PokemonItem from './pokemonItem';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pokedexContainer: {
        padding: '30px',
        backgroundColor: '#ffc77b',
        marginTop: '10px'
    }
});

function PokemonList() {
    const [pokeList, setPokeList] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPokemonList();
                if(Array.isArray(data) && data.length) {
                    console.log(data);
                    setPokeList(data);
                }
            }
            catch(error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    function onRenderPokemon(pokemonList) {
        let result = null;
        if(Array.isArray(pokemonList) && pokemonList.length) {
            result = pokemonList.map((pokemon, index) => (
                <PokemonItem pokemon={pokemon} key={index} index={index}/>
            ));
        }
        return result;
    }

    return (
        <div>
            <Grid container spacing={3} className={classes.pokedexContainer}>
                {onRenderPokemon(pokeList)}
            </Grid>
        </div>
    );
}

export default PokemonList;