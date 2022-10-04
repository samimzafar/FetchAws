const AWS = require("./awsConfigFile");
const tableName = "basicSongsTable";

// Create the Service interface for DynamoDB
var dynamodb = new AWS.DynamoDB();
var ddbDocumentClient = new AWS.DynamoDB.DocumentClient();
const getSingleItem = async () => {
  try {
    // var params = {
    //   Key: {
    //     artist: "sonu",
    //     song: "kol ho na ho",
    //   },
    //   TableName: tableName,
    // };

    var params = {
      TableName: tableName,
      IndexName: "artistIndex",
      KeyConditionExpression: "#artist = :artist",
      FilterExpression: "#id =:id",
      ExpressionAttributeNames: {
        "#artist": "artist",
        "#id": "id",
      },
      ExpressionAttributeValues: {
        ":artist": "atif",
        ":id": "6",
      },

      ScanIndexForward: false,
    };

    var result = await ddbDocumentClient.query(params).promise();
    console.log(result);
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
getSingleItem();

const getAllSongsByArtist = async () => {
  try {
    var params = {
      KeyConditionExpression:
        "artist = :artist AND begins_with ( song , :song )",
      ExpressionAttributeValues: {
        ":artist": "atif",
        ":song": "p",
      },
      TableName: tableName,
    };
    var result = await ddbDocumentClient.query(params).promise();
    console.log(JSON.stringify(result));
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};
// getAllSongsByArtist();
