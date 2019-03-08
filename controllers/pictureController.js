const request = require("request-promise");

class PictureController {

  static getPicture (req, res) {
    console.log(req.query)
    request.get("https://api.shutterstock.com/v2/images/search", {
      json: true,
      headers: {
        "User-Agent": "request"
      },
      auth: {
        user: process.env.S_ID,
        pass: process.env.S_SECRET
      },
      qs: {
        query: req.query.search,
        "image_type": "photo",
        "orientation": "vertical"
      },
      useQueryString: true
    })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  }

}

module.exports = PictureController;
