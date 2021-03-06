/**
 * Created by Kirill on 27.03.2016.
 */

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            templateUrl: 'posts.html',
            controller: 'postsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'post.html',
            controller: 'postCtrl'
        })
        .otherwise({
            template: '<h1>404 no such page</h1>'
        })
});

app.controller('homeCtrl', function ($scope) {
    console.log('homeCtrl');
    $scope.model = {
        message: 'this is my beautifull homepage'
    }
});

app.controller('postsCtrl', function($scope, postsFactory){
    console.log('postsCtrl', postsFactory);
    $scope.posts = postsFactory;
});

app.controller('postCtrl', function($scope, $routeParams, postsFactory){
    console.log($routeParams.postId);
    var postId = Number($routeParams.postId);
    $scope.post = _.find(postsFactory, {id: postId});
});

app.factory('postsFactory', function(){
    return [
        {
            id: 1,
            name: 'Why AngularJS is good?'
        },
        {
            id: 2,
            name: 'I love AngularJS'
        },
        {
            id: 3,
            name: 'Is AngularJS easy to learn'
        }
    ]
});