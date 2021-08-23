// FIXME: there is an issue, using correctly the environment variables in this project.
// Even using the documentation and `.env` files lead to the variables to be `undefined`.
const { NASA_API_KEY } = process.env;

export const NASA_API_URL = 'https://api.nasa.gov/planetary/apod';
export const key = NASA_API_KEY;
