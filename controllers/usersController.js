var path = require('path');
var fs = require('fs');

module.exports = {
      login:function(req, res){
            res.render("user/login")
      },
      register: function(req, res){
            res.render('user/register')
      }
  }