
var app = angular.module('applibApp', ['ngRoute','ngSanitize']);


app.controller('mainController', function($scope){
    $scope.name = "applibgroup";
    $scope.mainImg ={
        logo: './src/images/footer/logo_white-02.png',
        fb: './src/images/footer/fb_icon.png',
        github: './src/images/footer/github_icon.png',
        linkedin: './src/images/footer/linkedin_icon.png',
        medium: './src/images/footer/medium.png',
        meetup: './src/images/footer/meetup.png',
        slack: './src/images/footer/slack_icon.png',
        youtube:'./src/images/footer/youtube_icon.png',
        twitter:'./src/images/footer/twitter.png'
    }
})


// app.run(function($rootScope){
//     $rootScope.myFunction = function(el){
//         $rootScope.i = el;
//     };
// })

const eventControllerFunction = function($scope, $http, $log){
    $scope.img = {
        shareImg: './src/images/share_34.png',
        favouriteImg: './src/images/favourite_34.png',
        eventsDetailImg: './src/images/event_details_image.png',
        onlineEventsImg:'./src/images/online_event_48.png',
        eventbannerImg :'./src/images/events_page.png',
        prizebanner: './src/images/prize720.png',
        event_image: './src/images/event_image.png'
    }

    $scope.eventImg = [

    {imgName:'https://secure.meetupstatic.com/photos/event/7/f/8/d/600_496952653.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/b/9/7/c/600_496247484.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/b/3/5/c/600_495825916.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'}

    ];


    $http.get("api/v1/events")
         .then(function(response){
             const {result :[data]} = response.data;
             $scope.result = data.data;
         });

     $scope.myFunction = function(element){
        localStorage.setItem('el', element);
    }
    
    $scope.loveIcon = 'chnageColor';
    $scope.shareIcon = 'shareColor';

    $scope.onIconClick = function(iconElement){
        
        if($scope.loveIcon === 'chnageColor'){
            $scope.loveIcon = 'chnageToRed'
            localStorage.setItem('eventI', iconElement)
        }else{
            $scope.loveIcon  = 'chnageColor'
        }
    }
    
    $scope.onShareClick = function(){
        if($scope.shareIcon === 'shareColor'){
            $scope.shareIcon = 'blue'
        }else{
            $scope.shareIcon = 'shareColor'
        }
    }
    
 
    
};


const popularEventControllerFunction = function($http, $scope){

    
    $scope.eventImg = [

        {imgName:'https://secure.meetupstatic.com/photos/event/b/3/5/c/600_495825916.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/b/9/7/c/600_496247484.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/7/f/8/d/600_496952653.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'}
        ];

    $http.get("api/v1/events")
         .then(function(response){
             const {result :[data]} = response.data;
             $scope.popularData = data.data;
             console.log($scope.popularData)
         })
   
};

const eventDescControllerFunction =  function($scope, $http, $routeParams, $sce){

    console.log($routeParams.id)
    const id = $routeParams.id;

    $scope.description = [
        {descName:"Introduction of HarmonyOS", descIntro:"Learn more about Harmony OS", descSpeaker:"Sharath K S", descDate:"24 June 2021"},
        {descName:"Townhall with Applib Group", descIntro:"Learn more about Cloud Computing with Android", descSpeaker:"Rupal Shirpurkar", descDate:"27 May 2021"},
        {descName:"Ask Me Anything about AppLib Group", descIntro:"How to Contribute to the Opensource Community", descSpeaker:"Mr. Valluri K & Mr. Santosh Yadav", descDate:"29 April 2021"},
        {descName:"Introduction of HarmonyOS", descIntro:"Learn more about Harmony OS", descSpeaker:"Sharath K S", descDate:"27 May 2021"},
        {descName:"Introduction of HarmonyOS", descIntro:"Learn more about Harmony OS", descSpeaker:"Sharath K S", descDate:"27 May 2021"},
        {descName:"Introduction of IMPULSE 2021", descIntro:"Learn more about IMPULSE 2021", descSpeaker:"Mr. Valluri, Mr. Ratna Kishore, Mr. Janardhan Revuru , Mr. Raghu Shamanna ,Dr. Vijaya Kumar, Mr. Prashant Mishra, Mr. Sharath K S, Mr. Anupam Rath, Mr. Hari Krishnan", descDate:"25 March 2021"},
    ]

    $scope.eventImg = [

       {imgName:'https://secure.meetupstatic.com/photos/event/7/f/8/d/600_496952653.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/b/9/7/c/600_496247484.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/b/3/5/c/600_495825916.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'}

    ];



    $scope.videoSrc = [
        {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3eKRDTPaOzk")},
        {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/AfhZEDVw64E")},
        {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3xIooAquteg")},
        {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3xIooAqute")},
        {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3xIooAqute")},
        {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/F0vK8JaUTOs")}
    ]


   $http.get(`api/v1/events/${id}`)
         .then(function(response){
             console.log(response.data);
             const {finalData} = response.data;
             $scope.finalData = finalData
         })

         $scope.i = localStorage.getItem('el');
};


const homeControllerFunction = function($scope){

    $scope.img = {
        homeBannerImg: './src/images/home_image.png',
        verifiedImg: './src/images/verified.png',
        eventsDetailImg: './src/images/event_details_image.png',
        onlineEventsImg:'./src/images/online_event_48.png',
        onlineEvents:'./src/images/online-events.png',
        shareImg: './src/images/share_34.png',
        favouriteImg: './src/images/favourite_34.png',
        foundingMem : './src/images/founding.png'
    }
}

const libraryControllerFunction = function($scope){

    $scope.libImg = {
        eventBanner: './src/images/library_image.png',
        github: './src/images/github.png',
    }
}



const discussionControllerFunction = function($scope){
     
    $scope.disImg = {
        discussBanner: './src/images/discussion.png',
        slack: './src/images/slack.png',
    }
}

const communityControllerFunction = function($scope){
     
    $scope.comImg = {
        communityBanner: './src/images/discussion.png',
        slack: './src/images/slack.png',
        github: './src/images/github.png',
        medium:'./src/images/medium.png',
        linkedin:'./src/images/linkedin.png',
        twitter:'./src/images/twitter.png',
        meetup:'./src/images/meetup.png'

    }
}

// CONTROLLER FUNCTIONS


app.controller('eventController', eventControllerFunction);

app.controller('popularEventController', popularEventControllerFunction);

app.controller('eventDescController', eventDescControllerFunction);

app.controller('homeController', homeControllerFunction);

app.controller('libraryController', libraryControllerFunction);

app.controller('discussionController', discussionControllerFunction);

app.controller('communityController', communityControllerFunction);

//ROUTERS

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./src/views/home.html",
      controller:'homeController'
    })
    .when("/events", {
        templateUrl : "./src/views/events.html",
        controller:'eventController'
      })
    .when("/event-description/:id", {
        templateUrl:"./src/views/event-description.html",
        controller:'eventDescController'
    }).when("/library",{
        templateUrl:"./src/views/library.html",
        controller:'libraryController'
    }).when("/discussion",{
        templateUrl:"./src/views/discussion.html",
        controller:'discussionController'
    }).when("/community",{
        templateUrl:"./src/views/community.html",
        controller:'communityController'
    })
});
