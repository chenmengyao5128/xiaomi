/**
 * Created by YZTC on 2017/6/24.
 */
angular.module('shoppingModl',[])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/cart',{
                templateUrl:'component/shopping/shopping.html',
                css:'component/shopping/shopping.css',
                controller:'shoppingCtl'
            })
    }])
.controller('shoppingCtl',['$scope','$http',function ($scope,$http) {
    
}])