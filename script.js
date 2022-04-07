

bin = document.getElementById('input')

request('http://api.giphy.com/v1/gifs/search?q=' + bin + '&rating=r&api_key=s5AybssndQqjSdnMxPuFqfr4OiamJEsp') 

		  	content =  JSON.parse(body)

		  	// giphy returns several results so we can grab a random result by generating a random index
		  	// random number between 0 and 10
		  	item = Math.floor(Math.random() * 10)
			  
               	// reply to the channel by sending a message (image url)
		console.log(item)
		  
	
