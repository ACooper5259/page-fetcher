const request = require('request')
const fs = require('fs')

const userInput = process.argv
const url = userInput[2];
const path = userInput[3]
console.log(url, path)

if (userInput.length !== 4) {
  console.log('Incorrect information supplied')
}

request(url, function (error, response, body) {
  if (error) {
    console.log('Error: ', error)
  }
  if (!response) {
    console.log('Request Error: ', response && response.statusCode)
  }
  fs.writeFile(path, body, () => {
    //const info = fs.fstatSync(path).size
    if (error) {
      console.log('error: ', error)
    }
    else {
      console.log(`downloaded and saved ${body.length} bytes to ${path}`)
    }
  })
});


