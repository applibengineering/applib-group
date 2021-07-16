// const express = require('express');

// const app = express();


// app.use(express.static(__dirname + '/public'));

// const port = 9000;

// app.listen(port, () => {
//     console.log(`The app is running on ${port}...`)
// })

const morgan = require('morgan');
const eventsDetail = require('./utils/eventsDetail');
const allEvents = require('./utils/allEvents');
const photosById = require('./utils/photosById');
const photosByeventId = require('./utils/photosByeventId');
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


    //  photosByeventId(undefined, (error, data) => {
    //   console.log('error', error);
    //   console.log( data);
    //   let [eventPhotoById] = data.data;

    //   console.log(eventPhotoById)

    // })
 
 
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

  app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`)
    })
  

