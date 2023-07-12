const myHeaders = new Headers([
  ["Content-Type", "application/json"],
  [
    "x-api-key",
    "ec74915c5af2889e7fef06103762305ccd1e27582840da9d41fe367277284fa0",
  ],
]);
const BASE_URL = `https://api.thedogapi.com/v1/`
async function fetchDOGAPI(endpoint) {
    let response = await fetch(`${BASE_URL}${endpoint}`, {...myHeaders})
    return response.json()
}

export default fetchDOGAPI