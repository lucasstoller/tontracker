module.exports = {
  get: {
    description: "Hello World",
    operationId: "helloWorld",
    parameters: [],
    responses: {
      200: {
        description: "Hello World Text",
        content: {
          "text": {
            schema: {
              type: "string"
            },
          },
        },
      },
    },
  },
}