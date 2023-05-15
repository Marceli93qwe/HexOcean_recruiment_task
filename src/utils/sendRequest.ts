export const SendRequest = async (url: string, body: string) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body,
    });
    const status = response.status.toString();
    if (status.charAt(0) === "4") return alert("There was an error in your query, please check the data again.");
    else if (status.charAt(0) === "5") return alert("Sorry, an unexpected error occurred. Please try again later")
    const stringifiedResponse = JSON.stringify(await response.json());
    alert(stringifiedResponse)
}