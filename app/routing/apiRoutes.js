// Link for friends' array
var friendsList = require("../data/friends");

module.exports = function(app) {

// API GET request
app.get("/api/friends", function(req, res) {
    res.json(friendsList);
});


// API POST request
app.post("/api/friends", function(req, res) {
    var newData = req.body;
    var totalDifference = 0;
    var bestScore = 0; // Least difference 
    var bestMatch = 0;

    console.log(req.body);
    console.log(newData.scores);
    console.log(newData.scores[0]);

    // Compatability logic to search a best matching friend
    for(var i = 0; i < friendsList.length; i++) {
        for(var j = 0; j < newData.scores.length; j++) {
            var userScores = parseInt(newData.scores[j]);
            var friendScores = parseInt(friendsList[i].scores[j]);
            totalDifference += Math.abs(userScores - friendScores);
        }
        if (i === 0) {
            bestScore = totalDifference;
            bestMatch = 0;
        } else if(i != 0 && totalDifference < bestScore) {
            bestScore = totalDifference;
            bestMatch = i;   
        }
        // Reset the total difference.
        totalDifference = 0;
    }

    // Push a new user information to friends' array
    friendsList.push(newData);
    res.json(friendsList[bestMatch]);
    });

};