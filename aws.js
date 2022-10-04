// aws dynamodb update-table --table-name Movies --attribute-definitions AttributeName=genre,AttributeType=S --global-secondary-index-updates '[{"Create":{"IndexName": "genre-index","KeySchema":[{"AttributeName":"genre","KeyType":"HASH"}], "ProvisionedThroughput": {"ReadCapacityUnits": 10, "WriteCapacityUnits": 5},"Projection":{"ProjectionType":"ALL"}}}]'

// aws dynamodb update-table --table-name Movies --cli-input-json file://gsi-update-fetchaws.json --endpoint-url http://localhost:8000

// const getSpecificMovieDataByGenre = async () => {
//     var params = {
//       TableName: moviesTableName,
//   IndexName: "genreIndex",
//   KeyConditionExpression: "#genre = :genre",
//   FilterExpression: "#rating  <= :rating AND #businessDone <= :businessDone",
//   ExpressionAttributeNames: {
//     "#genre": "genre",
//     "#rating": "rating",
//     "#businessDone": "businessDone",
//   },
//   ExpressionAttributeValues: {
//     ":genre": "hot",
//     ":rating": 5,
//     ":businessDone": 600,
//   },

//   ScanIndexForward: false,
//     };
//     const { Items } = await dynamoClient.query(params).promise();
//     console.log(" Movie by Genre and name \n", Items);
//       dynamoClient.scan(params, (err, data) => {
//         if (err) {
//           console.log(`error ${JSON.stringify(err)}`);
//         } else {
//           console.log(
//             `Specific Movie data by name = \n ${JSON.stringify(data.Item)}`
//           );
//         }
//       });
//   };
