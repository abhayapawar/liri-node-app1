var TwitterPackage = require('twitter');
 


var secret = {
  consumer_key: 'xDrhcKIUq7yjqK8SuBvjAdwEQ',
  consumer_secret: '12Gj9cCRHYrp8YG6GI2PQLBwwvG7j7fwR8L80qMGNyQEo8ZHyE',
  access_token_key: '844561191276032000-QwzQZMydbvKjhh2qt1qwacqWklX8Qzc',
  access_token_secret: 'rY4MqI8cGitIMEddNnVrP54y9dzzY2xYvtTKIMnfYwFIa',
};

 
var client = new TwitterPackage(secret);
var params = {screen_name: 'abhaya_pawar', count: 20};
client.get('statuses/user_timeline', params , function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
else{
  //console.log(JSON.stringify(tweets, null, 2));
  console.log(tweets);  // The favorites. 
   console.log(response);  // Raw response object
  } 
});



