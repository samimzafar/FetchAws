const AWS = require("./awsConfigFile");
var fs = require("fs");
// -----------------------------------------
// Create the document client interface for DynamoDB
var documentClient = new AWS.DynamoDB.DocumentClient();

console.log("Loading song data into DynamoDB");

var songData = JSON.parse(fs.readFileSync("data.json", "utf8"));
songData.forEach((song) => {
  var params = {
    TableName: "basicSongsTable",
    Item: {
      artist: song.artist,
      song: song.song,
      id: song.id,
      priceUsdCents: song.priceUsdCents,
      publisher: song.publisher,
    },
  };

  documentClient.put(params, (err, data) => {
    if (err) {
      console.error(
        "Can't add song. Darn. Well I guess Fernando needs to write better scripts."
      );
    } else {
      console.log("Succeeded adding an item for this song: ", song.song);
    }
  });
});
