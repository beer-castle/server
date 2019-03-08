const axios = require('axios');

class BeerController {

    static onday(req, res) {

        var link = `http://api.brewerydb.com/v2/beer/random/?key=0d56931535ce0216a47319a1f6314b5c`
        console.log(link);

        axios.get(link)
            .then(function (data) {
                var obj = data.data.data
                res.send(obj)
            })
            .catch(function (err) {
                console.log('===========');
                res.send(err)
            })


    }

    static list(req, res) {
        // console.log(req.body.key)
        var link = `https://sandbox-api.brewerydb.com/v2/beer/WHQisc/ingredients/?key=0d56931535ce0216a47319a1f6314b5c`
        console.log(link);

        axios.get(link)
            .then(function (data) {
                // console.log(data)
                res.send(data.data.data)
            })
            .catch(function (err) {
                console.log('===========');

                res.send(err)
            })
    }
}

module.exports = BeerController;