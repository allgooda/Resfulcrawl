var Crawl = require("../models/crawl");
var User = require("../models/user");

var show = function(req, res, next) {
    User.findById(req.params.id, function(error, user){
    res.json(user);
  });
};

module.exports = {
  show:show,
};
