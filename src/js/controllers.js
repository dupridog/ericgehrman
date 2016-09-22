app.controller('mainCtrl', ['$scope', function($scope){
	console.log('lo loinit');
	$scope.perlasAge = moment().diff('2012-07-13', 'years');
	$scope.juliansAge = moment().diff('2014-09-10', 'years');; 


}]);