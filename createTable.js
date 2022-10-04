var AWS = require("aws-sdk");
AWS.config.update({
  apiVersion: "2012-10-08",
  region: "localhost",
  endpoint: "http://127.0.0.1:8000",
});

// -----------------------------------------
// Create the Service interface for dynamoDB
var dynamodb = new AWS.DynamoDB();
var params = {
  AttributeDefinitions: [
    {
      AttributeName: "song",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "song",
      KeyType: "HASH",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "basicSongsTable",
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.log("error = ", err);
  } else {
    console.log("Table created = ", JSON.stringify(data));
  }
});
