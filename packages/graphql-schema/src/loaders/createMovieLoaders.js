import config from '../config';
import DataLoader from 'dataloader';


const createMovieByIdLoader = () => new DataLoader(
  (movieIds) => fetch(`${config.restBackendUrl}/movies/by-ids`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ids: movieIds,
    }),
  }).then(response => response.json())
);

const createMovieLoaders = () => ({
  movieByIdLoader: createMovieByIdLoader(),
});


export default createMovieLoaders;
