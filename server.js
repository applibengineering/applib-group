

const morgan = require('morgan');
const eventsDetail = require('./utils/eventsDetail');
const allEvents = require('./utils/allEvents');
const photosById = require('./utils/photosById');
const photosByeventId = require('./utils/photosByeventId');
const repoList = require('./utils/allRepos');
const express = require('express');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 8080;

console.log(process.argv)

const result = [];

allEvents(undefined, (error, data) => {
    console.log('error', error);
    // console.log('data', data);
    result.push(data);

 })

 
 
 app.get('/api/v1/events', (req, res) => {
    res.send({
        status:'success',
        result:result
    });
    
  });

  
  
  app.get('/api/v1/events/:id', (req, res) => {
     
    
    console.log(req.params.id);
    eventsDetail(req.params.id, (error, data) => {
      console.log('error', error);
      // console.log(data);
      const {name} = data
      console.log(name)
      res.send({
        status:'success',
        finalData:name
      })
    })

  });


app.get('/api/v1/photos/:id', (req, res) => {
     
    
  console.log(req.params.id);
  photosById(req.params.id, (error, data) => {
    console.log('error', error);
    // console.log(data);
    // const {name} = data
    // console.log(data);
    
    let [eventData] = data.data;
    let eventId = eventData.id;
    console.log(eventData)

})

res.send({
  status:'success'
  // photosById:data
})

});


// app.get('/api/v1/allrepo', (req, res) => {

//   const  callback = function(response){

//     res.send({
//       status:'success',
//       data:response
//     })
//     console.log(JSON.stringify(response.data));
//    }


//   repoList(callback)

// })

  app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`)
    })
  

