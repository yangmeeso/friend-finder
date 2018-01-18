// Link to different page
var friendsList = require("../data/friends");

module.exports = function(app) {

// API GET request
app.get("/api/friends", function(req, res) {
    res.json(friendsList);
});

app.post("/api/friends", function(req, res) {
    var thisArray = [1,2,6,3,5,7,20,13,14];
    var biggestNumberSoFar = 0;

    for (let i = 0; i< thisArray.length; i++){
        
        if (i === 0){
            biggestNumberSoFar = thisArray[0];
        }else{
            if(biggestNumberSoFar < thisArray[i]){
                biggestNumberSoFar = thisArray[i];
            }
        }
    }
    console.log(biggestNumberSoFar);
    });

};