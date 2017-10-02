'use strict';

var app = angular.module('TestNeotech', [
	'ui.router'
])
app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		})
		.state('lista',{
			url: '/lista',
			templateUrl: 'views/lista.html',
			controller: 'ListaController',
			controllerAs: 'lista'
		})
		.state('forma',{
			url: '/forma',
			templateUrl: 'views/forma.html',
			controller: 'FormaController',
			controllerAs: 'forma'
		})
		.state('video',{
			url: '/video',
			templateUrl: 'views/video.html',
			controller: 'VideoController',
			controllerAs: 'video'
		})
		.state('gps',{
			url: '/gps',
			templateUrl: 'views/gps.html',
			controller: 'GpsController',
			controllerAs: 'gps'
		});
	$urlRouterProvider.otherwise('/home');
});