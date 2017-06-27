/**
 * Created by YZTC on 2017/6/23.
 */
angular.module('homeModl',[])
 .config(['$routeProvider',function ($routeProvider) {
     $routeProvider
         .when('/home',{
             templateUrl:"component/home/home.html",
             css:'component/home/home.css',
             controller:'homeCrl'
             }
         )
 }])
.controller('homeCrl',["$scope","$http",'$timeout',function ($scope,$http,$timeout) {
    $http.get('json/home.json').then(function (res) {
        $scope.swiperData =res.data.data.act_info[0].act_rows;
            console.log(res.data.data.act_info)
        $scope.swiperData1 =res.data.data.act_info[1].act_rows;
        $scope.swiperData2 =res.data.data.act_info[3].act_rows;
        $scope.swiperData3=res.data.data.act_info[3].head_img;
        $scope.swiperData4=res.data.data.act_info[4].act_rows;
        $scope.swiperData5=res.data.data.act_info[5].act_rows;
        console.log(res.data.data.act_info[5].act_rows)
    })
    $timeout(function () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay:1000,
            // 如果需要分页器
            pagination: '.swiper-pagination',
        })
    },50)
}])