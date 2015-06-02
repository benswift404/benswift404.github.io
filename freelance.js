var freelanceApp = angular.module('myApp', []);

freelanceApp.controller('mainController', [ '$scope', function($scope){
  $scope.name = '';
  
  $scope.options = [
    {optionName: "Build a website"},  
    {optionName: "Get video edited and ready for release"},
    {optionName: "Market your business"}
  ];
  
  
  
}]);
