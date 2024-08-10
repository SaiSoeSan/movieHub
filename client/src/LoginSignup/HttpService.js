
export async function get(endpoint, param){
    let baseUrl = 'http://localhost:8000/';
    return await fetch(`${baseUrl}${endpoint}`)
    .then(async (response) => {
        if(response.ok){
            let data = await response.json();
            return {
                status: true,
                data: data
            };

        }else{
            throw Error(response.statusText);
        }
    })
    .catch((error) => {
        console.error(error);
        return {
            status: false,
            message: error
        };
    })
}