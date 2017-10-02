'use strict';

app.factory('TestFactory', function($http){

	var linkList  = 'http://35.185.120.236:8080/getdata?email=emanuelcastillo9101@gmail.com&id=23432423423';
	var linkPost  = 'http://35.185.120.236:8080/postdata?email=emanuelcastillo9101@gmail.com&id=23432423423';
	var linkVideo = 'http://35.185.120.236:8080/getvideo?email=emanuelcastillo9101@gmail.com&id=23432423423';

	var TestFactory = {
		getList: () => {
			return $http.get(linkList).success( (data) => {
				return data;
			})
			.error( (err) => {
				console.log(err);
			})
		},
		createList: (lits)=>{			
			return $http.post(linkPost, lits).success((data)=>{
				return data;
			})
			.error((err)=>{
				console.log(err);
			})
		},
		getVideo: () => {
			return $http.get(linkVideo).success( (data) => {
				return data;
			})
			.error( (err) => {
				console.log(err);
			})
		}
	};
	return TestFactory
});


