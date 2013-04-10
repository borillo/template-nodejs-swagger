var swagger = require("./swagger.js");
var param = require("./params.js");
var swaggerErrors = swagger.errors;

exports.getUserById = {
   'spec': {
      "description" : "users",
      "path" : "/users.{format}/{userId}",
      "notes" : "Returns an user based on ID",
      "summary" : "Find user by ID",
      "method": "GET",
      "params" : [param.path("userId", "ID of the user that needs to be fetched", "string")],
      "responseClass" : "User",
      "errorResponses" : [ swaggerErrors.invalid('id'), swaggerErrors.notFound('user') ],
      "nickname" : "getUserById"
   },
   'action': function (req,res) {
      var userId = parseInt(req.params.userId);

      res.send({
         id: userId,
         name: 'User ' + userId
      });
   }
};
