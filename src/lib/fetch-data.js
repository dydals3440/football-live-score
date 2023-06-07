export const fetchFixtures = async () => {
  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '59129c8f61mshc211d8d3b415a72p190690jsn3fdebbf50325',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
