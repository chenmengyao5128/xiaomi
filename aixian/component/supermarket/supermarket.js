/**
 * Created by YZTC on 2017/6/23.
 */
angular.module('superModl',[])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/supermarket',{
             templateUrl:'component/supermarket/supermarket.html',
            css:'component/supermarket/supermarket.css',
            controller:'superCtl'
    })
}])
.controller('superCtl',["$scope","$http",function ($scope,$http) {
    $http.get('json/category.json').then(function (res) {
        console.log(res)
        var ass;
        var att=[];
        $scope.data=res.data.data.categories;
        $scope.right=res.data.data.products[104749];
        $scope.left=res.data.data.categories[0].cids;
        $scope.chang=function (id,arr) {
            $scope.right=res.data.data.products[id];
            $scope.left=arr;
            ass=$scope.right;
            $scope.visible=false;
            $scope.visibl = false;
            $scope.orderStyle=''
        }
        $scope.visible = false;
        $scope.toggle = function () {
            $scope.visible = !$scope.visible;
            $scope.visibl = false;
        }

        //
        // var abb=[];
        $scope.top=function (id) {
            att=[];
            angular.forEach( ass,function (data) {
                if(id==data.child_cid){
                    att.push(data);
                    $scope.right=att;
                }
                if(id==0){
                    $scope.right=ass;
                }

               // console.log(data.price*100)
        //         var aoo=data.price*100
        //         abb.push(aoo)
        //         function sortNumber(a,b)
        // {
        //     return a - b
        // }

     // //    console.log(data.price)
     //        console.log(abb.sort(sortNumber))


            })
            $scope.orderStyle=''
        }
// var acc=[1,2,3,4,5,6,7,2,3,4,5,2,9,0]
//         function sortNumber(a,b)
//         {
//             return a - b
//         }
// console.log(ass.sort(sortNumber))


        $scope.visibl = false;
        $scope.toggl = function () {
            $scope.visibl= !$scope.visibl;
            $scope.visible = false;
        }

        // $scope.di=function () {
        //     console.log(att)
        //     console.log(ass)
        //     if(att=[]){
        //         function JsonSort(json,key) {
        //             for(var i=1;i<json.length;i++){
        //                 var tem=json[i],
        //                     val=parseFloat(tem[key]),
        //                     j=i-1;
        //                 while(j>=0 &&json[j][key]>val){
        //                     json[j+1]=json[j];
        //                     j=j-1;
        //                 }
        //                 json[j+1]=tem;
        //             }
        //             return json;
        //         }
        //     var json = JsonSort(ass,'price');
        // //         console.log(json)
        // //         // for(var k=0;k<json<length;k++){
        // //         //     console.log(json[k].price)
        // //         // }
        // //
        //    }
        //
        //  }
    })
}])