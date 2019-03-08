const axios = require('axios');

class BeerController {

    static onday(req, res) {
        console.log(process.env.BREW_KEY)
        var link = `http://api.brewerydb.com/v2/beer/random/?key=${process.env.BREW_KEY}`
        console.log(link);

        axios.get(link)
            .then(function (data) {
                var obj = data.data.data
                console.log(obj)
                res.send(obj)
            })
            .catch(function (err) {
                console.log('===========');
                res.send(err)
            })


    }

    static list(req, res) {
        console.log(req.body.key)
        var link = `https://sandbox-api.brewerydb.com/v2/beer/WHQisc/ingredients/?key=${process.env.BREW_KEY}`
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