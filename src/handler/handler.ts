import * as lambda from 'aws-lambda'

module.exports.hello = (event: lambda.APIGatewayEvent, context: lambda.Context, callback: lambda.Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  }

  callback(undefined, response)
}
