// Link to different page
var friendsList = require("../data/friends");

module.exports = function(app) {

// API GET request
app.get("/api/friends", function(req, res) {
    res.json(friendsList);
});

app.post("/api/friends", function(req, res) {
    var 
    var bestMatch = 0;
    var 

    for (let i = 0; i< friendsList.length; i++){
        
        if (i === 0) {
            biggestNumberSoFar = thisArray[0];
        } else {
            if (biggestNumberSoFar < thisArray[i]) {
                biggestNumberSoFar = thisArray[i];
            }
        }
    }
    console.log(biggestNumberSoFar);
    });

};
