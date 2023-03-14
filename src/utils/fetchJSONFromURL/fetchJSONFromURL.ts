/**
 * fetchJSONFromURL - A function that fetches a JSON response from the provided URL
 * @param {string} url - The URL to fetch the JSON response from
 * @returns {Promise} A promise that resolves with the JSON response from the provided URL
 */
const fetchJSONFromURL = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

export default fetchJSONFromURL
