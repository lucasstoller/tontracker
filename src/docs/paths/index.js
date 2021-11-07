const helloWorld = require("./helloWorld");

module.exports = {
  paths:{
      '/':{
          ...helloWorld,
      }
  }
}