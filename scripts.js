
var app = angular.module('app',[]);
app.controller('peopleController', function($scope) {
   $scope.people=[
  {name:"Adri",surname:"Canas",phone:"666666666"}

 ];

$scope.Save=function(){
	$scope.people.push({

		name:$scope.newContact.name, surname:$scope.newContact.surname, phone:$scope.newContact.phone
		
	})

	$scope.formVisibility=false;
	}

	$scope.formVisibility=false;

	$scope.showForm=function(){
		$scope.formVisibility=true;
}


 });