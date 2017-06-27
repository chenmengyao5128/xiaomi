/**
 * Created by YZTC on 2017/6/24.
 */
angular.module('mineMdel',[])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/mine',{
                templateUrl:'component/mine/mine.html',
                css:'component/mine/mine.css',
                controller:'mineCtr'
            })
    }])
.controller('mineCtr',['$scope','$http',function ($scope,$http) {

}])