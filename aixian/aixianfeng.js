/**
 * Created by YZTC on 2017/6/23.
 */
angular.module('axf',['ngRoute','homeModl','angularCSS','superModl','shoppingModl','mineMdel'])
    .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .otherwise({redirectTo:'/'})
    }])
   // var app=angular.module('axf',[]);
    .controller('axfC',['$scope',function ($scope){
        $scope.isSelected1 = true;
        $scope.isSelected2 = false;
        $scope.isSelected3 = false;
        $scope.isSelected4 = false;
       $scope.isSele1=function () {
            $scope.isSelected1 = !$scope.isSelected1;
           $scope.isSelected2 = false;
           $scope.isSelected3 = false;
           $scope.isSelected4 = false;
        }
        $scope.isSele2=function() {
            $scope.isSelected2 = !$scope.isSelected2;
            $scope.isSelected1 = false;
            $scope.isSelected3 = false;
            $scope.isSelected4 = false;
        }
        $scope.isSele3=function () {
            $scope.isSelected3 = !$scope.isSelected3;
            $scope.isSelected1 = false;
            $scope.isSelected2 = false;
            $scope.isSelected4 = false;
        }
        $scope.isSele4=function () {
            $scope.isSelected4 = !$scope.isSelected4;
            $scope.isSelected1 = false;
            $scope.isSelected2 = false;
            $scope.isSelected3 = false;
        }
    }])