var AWS = require("aws-sdk");
AWS.config.update({
  apiVersion: "2012-10-08",
  region: "localhost",
  endpoint: "http://127.0.0.1:8000",
});
module.exports = AWS;
