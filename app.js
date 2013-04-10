var express = require("express"),
    resources = require("./resources.js"),
    models = require("./models.js"),
    swagger = require("./swagger.js");

var app = express();
app.use(express.bodyParser());

swagger.setAppHandler(app);
swagger.addModels(models).addGet(resources.getUserById);
swagger.configure("http://localhost:8002", "0.1");

var docs_handler = express.static(__dirname + '/swagger-ui-1.1.13/');

app.get(/^\/docs(\/.*)?$/, function(req, res, next) {
   if (req.url === '/docs') {
      res.writeHead(302, { 'Location' : req.url + '/' });
      res.end();
      return;
   }

   req.url = req.url.substr('/docs'.length);
   return docs_handler(req, res, next);
});

app.listen(8002);
