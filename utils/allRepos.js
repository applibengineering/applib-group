const axios = require('axios');

const repoList = function(cb){
    const allRepoList = {
        method: 'get',
        url: 'https://api.github.com/users/applibengineering/repos',
        headers: { }
      };
      
      axios(allRepoList)
      .then(function (response) {
        const result = response.data
        cb(result)
      })
      .catch(function (error) {
        console.log(error);
      });
}




module.exports = repoList;