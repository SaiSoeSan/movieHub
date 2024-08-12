export async function post(endpoint, param){
    let baseUrl = 'http://localhost:8000/';
    return await fetch(`${baseUrl}${endpoint}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param)
    })
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