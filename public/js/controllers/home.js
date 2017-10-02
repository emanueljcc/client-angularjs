'use strict';

app.controller('HomeController', function(TestFactory){});

app.controller('FormaController', function($scope,TestFactory){

	$scope.tittle = "Crear Lista";
	$scope.button = "Enviar";
	$scope.list = {};

	$scope.save = () => {
		TestFactory.createList($scope.list).then((data) => {
			if(data.status === 200 && data.data == "Registro exitoso"){
				Materialize.toast(`<i class="material-icons">check</i> ${ data.data}`, 4000, 'green')
			}else{
				Materialize.toast(`<i class="material-icons">error_outline</i> ${ data.data}`, 4000, 'red')
			}
		});
	}

});

app.controller('GpsController', function(TestFactory){});

app.controller('ListaController', function(TestFactory){
	var vm = this;
	vm.lists = [];
	TestFactory.getList().then((data)=>{
		if(data.status === 200){
			vm.lists = data.data;
		}
	})
});

app.controller('ListaController', function(TestFactory){
	var vm = this;
	vm.lists = [];
	TestFactory.getList().then((data)=>{
		if(data.status === 200){
			vm.lists = data.data;
		}
	})
});

app.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*://www.youtube.com/**'
   ]);
 });

app.controller('VideoController', function($scope,TestFactory) {
	TestFactory.getVideo().then((data)=>{
		if(data.status === 200){
			var video = data.data.url.split('=').pop();
			  
			$scope.getUrl = (id) =>{
			    return '//www.youtube.com/embed/'+video+'?rel=0'
			}
			$scope.url = $scope.getUrl(video)
		}
	})
});
