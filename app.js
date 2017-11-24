(function () {
	'use strict';

	angular.module('BeMEAN', ['720kb.datepicker'])
	.controller('formController', formController);
	
	formController.$inject = ['$scope', '$http'];
	function formController($scope, $http) {
		$scope.submitStudentDetails = function() {
			console.log($scope.student);
			var promise = $http.post('/studentDetails', $scope.student);
			promise.then(function(response) {
				alert("Data successfully added to the server");
				location.reload();
			})
			.catch(function(error) {
				console.log(error);
			})
		};
	}
	
})();
(function () {
	'use strict';

	angular.module('studentData', [])
	.controller('dataController', dataController)
	.filter('filterSubjects', filterSubjectsFactory);

	dataController.$inject = ['$scope', '$http'];
	function dataController($scope, $http) {
			var promise = $http.get('/data').then(function(response){
				console.log(response);
				$scope.studentDataList = response.data;
		})
	}
	function filterSubjectsFactory() {
		var filterFunction = function filterSubjects(s) {
			var subjects = "";
			if (s.chemistry == true) {
				subjects = subjects + "Chemistry ";
			}
			if (s.physics == true) {
				subjects = subjects + "Physics ";
			}
			if (s.Maths == true) {
				subjects = subjects + "Maths ";
			}
			if (subjects === "") {
				subjects = subjects + "No interest in studies";
			}
			return subjects;
		}
		return filterFunction;
	}
})();
