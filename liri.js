var choice = process.argv[2];

var input;
if(process.argv[3])
	input = process.argv[3];
for(var i=4; i<process.argv.length; i++){
	 input+=(" "+process.argv[i]);
}
function bonus(data){
	var fs= require("fs");
fs.appendFile('log.txt', JSON.stringify(data, null ,2),function(err){
	if (err) throw err;
	console.log("liri.js was appended to the fle!")
});
}


console.log("user input: " + input);


if (choice === 'my-tweets'){
	tweeter();
}
else if (choice === "spotify-this-song"){
	
	if(input ===" " || input === undefined){
		nullsong();
	}
	else{
		spotifySongs(input);
	}
}

else if (choice ==="movie-this"){
	if(input ===" " || input === undefined){
		nullmovie();
	}
	else{
	   movieName(input);
	}
 
}
else if (choice === "do-what-it-say"){
	 random();
}



function tweeter(){
	var stuffINeed = require("./keys.js");
	console.log(stuffINeed);
};



function spotifySongs(input){


	console.log("Spotify this song: "+input);

	var spotify=require('spotify');
	
	spotify.search({ type: 'track', query: input }, function(err, data) {
		if (!err) {
			bonus(data.tracks.items[0].name +"\n"+ data.tracks.items[0].artists[0].name);
			console.log("Song: " + data.tracks.items[0].name);
			console.log("Artist: " + data.tracks.items[0].artists[0].name);
			console.log("Album: " + data.tracks.items[0].album.name);
			console.log("Preview URL: " + "<a href=" + data.tracks.items[0].preview_url + "></a>");
			return;
		}
		else {
			console.log('Error occurred: ' + err);
			return;
			}
	});
}



function movieName(input){
   
var request = require("request");



request("http://www.omdbapi.com/?t=" +  input+  "&y=&plot=short&r=json", function(error, response, body) {
  
  if (!error && response.statusCode === 200) {
	
	console.log("Title : " + JSON.parse(body).Title);
	console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
	console.log("The year released: " + JSON.parse(body).Released);
	console.log("The Countey released: " + JSON.parse(body).Country);
	console.log("The Language: " + JSON.parse(body).Language);
	console.log("The plot od the movie: " + JSON.parse(body).Plot);
	console.log("Actors in movie: " + JSON.parse(body).Actors);
	console.log("Rotten Tomatoes URL is:" + "https:www.rottentomatoes.com/m/" + input);

	var rating=[];
	if(rating!=undefined && rating!=0){
		console.log('The Rotten Tomatoes rating is ' + JSON.parse(body).Ratings[1].Value); 
	 }
	 else{
		console.log("This movie dont have Rotten Tomatoes rating");
	 }
	}
 });
}
function nullsong(){
spotifySongs("the sing");
}

function nullmovie(){
movieName("Mr.Nobody");
}

function random(){

 var fs = require("fs");
	 fs.readFile("./random.txt", "utf8", function(err, data) {
	   
		if (!err) 
		{
		  console.log(data);
		  
		  spotifySongs(data);
		}

  
  else{
		console.log(err);
	  }

  });

}