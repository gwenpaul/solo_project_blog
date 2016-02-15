var app = angular.module('blogApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'MainController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/success', {
            templateUrl: 'views/success.html',
            controller: 'SuccessController'
        })
        .when('/submitPost', {
            templateUrl: 'views/submitpost.html',
            controller: 'SubmitController'
        })
        .when('/viewPost', {
        templateUrl: 'views/viewpost.html',
        controller: 'ViewPostController'
        })
        .otherwise({
        redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
app.controller('MainController', ['$scope', '$http', function($scope, $http){

}]);

app.controller('DeleteController', ['$scope', '$http', function($scope, $http){
    console.log("in delete router", request);
    }]);

app.controller('LoginController', ['$scope', '$http', '$location', function($scope, $http, $location){

    $scope.data = {};


    var app = angular.module('blogApp', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterController'
            })
            .when('/registerConfirm', {
                templateUrl: 'views/registerConfirm.html',
                controller: 'LoginController'
            })
            .when('/choose', {
                templateUrl: 'views/choose.html',
                controller: 'ChooseController'
            })
            .when('/save', {
                templateUrl: 'views/save.html',
                controller: 'SaveController'
            })
            .when('/show', {
                templateUrl: 'views/show.html',
                controller: 'ShowController'
            })
    }]);

    app.controller('LoginController', ['$scope', '$http', '$location', function($scope, $http, $location) {


    $scope.submitData = function(){
        $http.post('/', $scope.data).then(function(response){
            console.log(response);
            $location.path(response.data);
        });
    };
}]);

//app.controller('SuccessController', ['$scope', '$http', function($scope, $http){
//
//}]);
//
//app.controller('FailController', ['$scope', '$http', function($scope, $http){
//
//}]);
//
//

app.controller('SubmitPostController', ['$scope', '$http', function($scope, $http){

    $scope.submission = {};
$scope.successPost = false;
    //submission.author = $scope.author;
    //submission.date = $scope.date;
    //submission.title = $scope.title;
    //submission.post = $scope.post;

    $scope.submit = function(){

        console.log('fired submit click');

        $http.post('/blog/add', $scope.submission).then(function(response){
                console.log(response);
                //returns promise
                $scope.author = '';
                $scope.date = '';
                $scope.title = '';
                $scope.post = '';
            $scope.successPost = true;
            }, function(error){
            console.log(error);
        })
    }
}]);
//then gives response
app.controller('PostController', ['$scope', '$http', function($scope, $http) {
    $http.get('/blog/see').then(function (response) {
        console.log(response);
        $scope.blogs = response.data;
    });
}]);



//in this controller, i am defining an empty object named submission that takes in author, date, title, post. these
//values are bound to the view via ng-model, ie: ng-model="submission.author". $scope.submit binds to the submit value
//on the view, so that when the user submits, it sends the submission object to the blog/add route...


