const friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}]

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