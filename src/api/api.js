const apiEndPoint = 'https://gibraltar-airport-feed.p.rapidapi.com'

const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'gibraltar-airport-feed.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
  };


  const getAiportArrivals = async () => {
      try {
          const response = await fetch(`${apiEndPoint}/arrivals`, options);
          if (response.ok) {
              const jsonResponse = await response.json()
              return jsonResponse.collection.items;
          }
          throw new Error('Arrival request failed' + response.statusText);
      } catch (err) {   
          // ideally we would log errors and not use console.log()
          console.log(err)   
      }
  }


  const getAiportDepatures = async () => {
    try {
        const response = await fetch(`${apiEndPoint}/departures`, options);
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse.collection.items;
        }
        throw new Error('Arrival request failed' + response.statusText);
    } catch (err) {   
        // ideally we would log errors and not use console.log()
        console.log(err)   
    }
}

export const API = {
    getAiportArrivals,
    getAiportDepatures
}