const https = require('https');

async function getData(graphqlString) {

const response = await fetch(
    'https://rickandmortyapi.com/graphql',
    {
      method: 'post',
      body: graphqlString,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': graphqlString.length,
        'User-Agent': 'Node',
      },
    }
  );

  const json = await response.json();
  return {
    status: response.status,
    data:json.data
  };
}
 
module.exports = getData;