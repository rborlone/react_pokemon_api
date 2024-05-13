const consumirServicio = (endpoint, data, method = 'GET', Customheaders = {}) => {

    const url = `${endpoint}`;
    
    let headers = {'Content-type': 'application/json'}    
    
    for (const [key, value] of Object.entries(Customheaders)) {
        headers[key] = value
    }

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: headers,
            body: JSON.stringify(data)
        });
    }
}

export {
    consumirServicio
}