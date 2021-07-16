 //all events

 const request = require('request');
 const api_key = 'f39kqd1blfsd2jmt4mgf4t7kmd=e162ngvj4be1c6t76avmvv8adv';
 const photosByeventId = (ids, callback) => {
 
    const allPhoto_url = `https://api.meetup.com/application-library-engineering-group/photos?page=20${api_key}`;

    request({
        url:allPhoto_url,
        json:true,
        headers: {
            'Authorization': 'Bearer 58221bfec48d5a17177f9bcdd6414215'
        },
        rejectUnauthorized: false
    },(error, {body}) => {
        if(error){
            callback(`Unable to connect to Meetup service`,undefined)
        }else if(body.errors){
            callback('Unable to find ID',undefined)
        }else{
            callback(undefined, {
                 data: body,
                 
            })
        }

    })

  };

  module.exports = photosByeventId;