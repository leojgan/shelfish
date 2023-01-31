const request = require('request');

request({ url: "https://api.boardgameatlas.com/api/search?order_by=rank&client_id=JLBr5npPhV" } , function(err, res, jsonString) {
    var json = JSON.parse(jsonString);
    var gameNameList = json.games.map(e => e.name);
    console.log(gameNameList);
});