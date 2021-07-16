 //all events

 const request = require('request');

 const allEvents = (ids, callback) => {
    const url = `https://api.meetup.com/self/events?page=20&desc=true&f39kqd1blfsdjmt4mgf4t7kmd=e162ngvj4be1c6t76avmvv8a`;

    request({
        url:url,
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
                 data: body
            })
        }
    })

  };

  module.exports = allEvents;