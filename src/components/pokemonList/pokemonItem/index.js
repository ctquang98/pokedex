import React from 'react';
import { Grid, Card, CardMedia, CardContent} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({    
    card: {
        backgroundColor: '#cbecf1'
    },
    cardMedia: {
        margin: 'auto'
    },
    cardContent: {
        textAlign: 'center',
        textTransform: 'capitalize'
    }
});

const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

function PokemonItem({ pokemon }) {
    const classes = useStyles();
    const pokemonIndex = getPokemonIndex(pokemon.url);

    function getPokemonIndex(url) {
        let urlElements = url.split('/');
        urlElements.pop();
        return urlElements[urlElements.length-1];
    }
    
    return (
        <Grid item xs={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imageUrl + `/${pokemonIndex}.png`}
                    style={{
                        width: '120px',
                        height: '120px',
                    }}
                />
                <CardContent className={classes.cardContent}>
                    {pokemon.name}
                </CardContent>
            </Card>
        </Grid>
    );
}

export default PokemonItem;