var friendFile = require("../data/friends.js")
var friends = friendFile.friends


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        console.log(newFriend);
        //one greater than the theoritical maximum
        var diff = 41;
        var match = {};
        friends.forEach(fElement => {
            let newDiff = 0
            fElement.scores.forEach((score, i) => {
                newDiff += Math.abs(score - newFriend.scores[i])
            })
            console.log(newDiff)
            if (newDiff < diff) {
                match = fElement;
                diff = newDiff;
            }
        });
        friends.push(newFriend);

        res.json(match);
    });
};