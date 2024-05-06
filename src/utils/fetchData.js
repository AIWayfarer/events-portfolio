export async function fetchData(queryUrl) {
  try {
    let response = await fetch(queryUrl, {
      cache: "no-store",
      credentials: "same-origin",
    });
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - URL: ${queryUrl}`
      );
    }
    let data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
