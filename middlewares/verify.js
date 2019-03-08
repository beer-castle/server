const jwtConvert = require('../helpers/jwtConvert');

module.exports = function (req, res, next) {
  if (req.headers.hasOwnProperty('token')) {
    try {
      const decoded = jwtConvert.verify(req.headers.token)
      req.loggedInUser = decoded
      next()
    } catch (error) {
      res.status(401).json({
        message: 'Invalid Token'
      })
    }
  } else {
    res.status(400).json({
      message: 'Please Provide Token'
    })
  }
}