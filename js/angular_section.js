/* from : http://stackoverflow.com/questions/15247184/angularjs-equivalent-to-jquery-toggle-show-hide-a-section */

'use strict';

var App=angular.module('myApp',[]);

function Ctrl($scope){
    var section = 1;
    
    $scope.section = function (id) {
        section = id;   
    };
    
    $scope.is = function (id) {
        return section == id;
    };
}