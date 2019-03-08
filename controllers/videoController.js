const axios = require('axios');

class VideoController {
  static getVideo(req, res) {
    console.log(req.query.search)
    axios
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${req.query.search}&type=video&key=${process.env.YOUTUBE_APIKEY}`)
      .then(({ data }) => {
        console.log(data)
        if(data.items[0]) {
          console.log(data.items[0].id)
          console.log(data.items[0].id.videoId)
          res.status(200).json({
            videoId: data.items[0].id.videoId
          })
        } else {
          res.status(404).json({message: 'video not found'})
        }
      })
      .catch(error => {

      })
  }
}

module.exports = VideoController;
