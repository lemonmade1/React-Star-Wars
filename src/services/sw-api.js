const starshipEndpoint = 'https://swapi.dev/api/starships/'

export function getAllStarShips() {

	console.log("Hello from getAllStarships!")
	
	return fetch(starshipEndpoint)	
		.then( res => res.json() )
		.then( json => json.results )
}
		