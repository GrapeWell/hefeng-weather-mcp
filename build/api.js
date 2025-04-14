export async function makeNWSRequest(url) {
    const headers = {
        'X-QW-Api-Key': `${process.env.API_KEY}`,
    };
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return (await response.json());
    }
    catch (error) {
        console.log("Error making NWS request:", error);
        return null;
    }
}
