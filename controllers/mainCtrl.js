var user = require('../user.js');

module.exports = {

  //GETs
  getName: function(req, res, next) {
    res.json({ Name: user.name })
  },
  getLocation: function(req, res, next) {
    res.json({ Location: user.location })
  },
  getOccupation: function(req, res, next) {
    res.json({ Occupation: user.occupation })
  },
  getHobbies: function(req, res, next) {
    res.json({ Hobbies: user.hobbies })
  },
  getHobbyType: function(req, res, next) {
    for(var i = 0; i < user.hobbies.length; i++) {
      if(user.hobbies[i].type === req.params.type) {
        res.json({ user.hobbies[i] });
      }
    }
  },
  getfamily: function(req, res, next) {
    for(var i = 0, i < user.family.length; i++) {
      if(user.family[i].relation === req.query.relation) {
        res.json({ user.family[i] })
      }
  },
  getFamilyGender: function(req, res, next) {
    for(var i = 0; i < user.family.length; i++) {
      if(user.family[i].gender === req.query.gender && user.family[i].gender === 'male' ) {
        res.json({ user.family[i] })
      } else if( user.family[i].gender === req.query.gender && user.family[i].gender === 'female') {
        res.json({ user.family[i] })
      }
    }
  },
  getRestaurants: function(req, res, next) {
    for(var i = 0; i < user.restaurants.length; i++) {
      if(user.restaurants[i] === req.query.restaurants) {
        res({ restaurants: user.restaurants })
      }
    }
  }, getRestaurantName: function(req, res, next) {
    for(var i = 0, i < user.restaurants.length; i++) {
      if(user.restaurants[i].name === req.params.name) {
        res.json({ user.restaurants[i] })
      }
    }
  }


  //PUTs
  //POSTs


}
