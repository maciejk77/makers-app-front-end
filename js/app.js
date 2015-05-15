var makersApp = angular.module('makersApp', []);

function MakersController($scope) {
  $scope.tasks = [
    { 'todo': 'Maciek', 'completed': false }, 
    { 'todo': 'Kanishk', 'completed': false }, 
    { 'todo': 'Paul', 'completed': true },
    { 'todo': 'Andrea', 'completed': false }
  ];
    
  $scope.getToDoCount = function () {
    return $scope.tasks.length;
  };
    
    
  $scope.addToDo = function () {
    $scope.tasks.push({todo:$scope.formToDoText, completed:false});
    $scope.formToDoText = '';
  };

}

makersApp.controller('MakersController', MakersController);
