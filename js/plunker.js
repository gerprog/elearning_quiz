var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = [
    {
      name: 'item1'
    },
    {
      name: 'item2'
    },
    {
      name: 'item3'
    },
        {
      name: 'item4'
    }
  ]
  $scope.select = function(item) {
    $scope.selected = item
  }
});
