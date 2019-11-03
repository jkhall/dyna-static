// import fetch from 'node-fetch';
let fetch = require('node-fetch')

// if(!process.env.NETLIFY){
//   require('dotenv').config()
//   fetch = require('node-fetch')
// }

exports.handler = async function(event, context, callback) {
  // the name of the test data that we're trying to reference
  // let name = event.queryStringParameters.name
  let name = "Bananas"

  return fetch('https://api.github.com/repos/jkhall/dyna-static/contents/data.json')
    .then(res => res.json())
    .then(data => ({
      statusCode: 200,
      body: data.name
    }))
      // let data = JSON.parse(body)
      // console.log(data.content)

      // let content = data.content
      // let sha = data.sha
      // let decodedContent = JSON.parse(Buffer.from(content, 'base64').toString('ascii'))
      
      // console.log(`This is the sha: ${sha}`)
      // console.log(`This is the decoded content: ${decodedContent}`)

      // let payload = {
      //   statusCode: 200,
      //   body: {
      //     message: "hey"
      //   }
      // }
      // // callback(payload)
      // console.log(payload)
      // return payload

      // // now make the post request for a new file with the appropriate headers
      // let putUrl = 'https://api.github.com/repos/jkhall/dyna-static/contents/data.json'

      // // according to the params in the request, update one of the data
      // // check if the name is valid
      // if(!decodedContent.data.map((v, i) => v.name).includes(name)){
      //   if(!process.env.NETLIFY){
      //     console.log("Name not found in data")
      //     return
      //   } else {
      //     // callback({status: 400, body: "what the eff", message: "Name not found in data"})
      //     return {
      //       statusCode: 400,
      //       body:{
      //         message: "Name not found in data"
      //       }
      //     }
      //   }
      // }
      
      // for(var node of decodedContent.data){
      //   if(node.name === name){
      //     node.done = "true"
      //   }
      // }

      // let newBody = {
      //   message: "this is a test",
      //   committer: {
      //     name: "Jordan",
      //     email: "jordankhall23@gmail.com"
      //   },
      //   content: Buffer.from(JSON.stringify(decodedContent)).toString('base64'),
      //   sha: sha
      // }

      // console.log(JSON.stringify(newBody))

      // fetch(putUrl, {method: 'PUT', body: JSON.stringify(newBody), headers: {Authorization: `token ${process.env.GITTOKEN}`}})
      //   .then(res => res.json())
      //   .then(jData => {
      //     // callback({body: json})
      //     return {
      //       body: "What the eff",
      //       payload: jData
      //     }
      //   })
    // })
};
