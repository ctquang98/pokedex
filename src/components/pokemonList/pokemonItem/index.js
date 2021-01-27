import React from 'react';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({    
    card: {
        backgroundColor: '#cbecf1'
    },
    cardMedia: {
        margin: 'auto'
    }
});

const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

function PokemonItem({ pokemon, index }) {
    const classes = useStyles();
    return (
        <Grid item xs={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imageUrl + `/${index + 1}.png`}
                    style={{
                        width: '120px',
                        height: '120px',
                    }}
                />
                <CardContent>
                    {pokemon.name}
                </CardContent>
            </Card>
        </Grid>
    );
}

export default PokemonItem;