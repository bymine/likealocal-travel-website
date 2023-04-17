export async function fetchData() {
  return await (await fetch(process.env.REACT_APP_API_URL)).json();
}
