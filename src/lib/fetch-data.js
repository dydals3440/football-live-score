export const fetchFixtures = async () => {
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
    },
  };

  const result = fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));

  return result;
};
