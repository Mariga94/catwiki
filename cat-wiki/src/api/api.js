async function fetchCatData(endpoint) {
  const headers = new Headers([
    ["Content-Type", "application/json"],
    [
      "x-api-key",
      "live_r58FkMjEMIlUYNE8DQH7zWSHlMdZwJa5pjRxiLWxftmD1AWab19iNeVMKGhHlX4x",
    ],
  ]);
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/${endpoint}`, {
      ...headers,
    });
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default fetchCatData;
