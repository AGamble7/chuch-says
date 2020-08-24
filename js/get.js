function get(url) {
    // step 1: fetch the data
    return fetch(url)
        .then(function(response){ // step 3: return the data from the response.json() method
            return response.json()
        })
        .then(function(data) {
            // Step 3: return the data from the response.json() method
        return data;
    })
}
