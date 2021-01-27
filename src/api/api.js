import api from './index';

export const getPokemonList = () => {
    return new Promise((resolve, reject) => {
        api.get('/pokemon?limit=20')
            .then(res => {
                let { results } = res.data;
                resolve(results);
            })
            .catch(err => reject(err));
    });
}