// //从Cookie获取userid
// var userId = getCookie("uid");
// // 从Cookie获取用户昵称
// var Name = getCookie("name");
// if (userId == null) {
// 	window.location.href = "/login.html";
// }
// $(document).ready(function() {
// 	$("p:eq(0)").html(Name);
// 	showUnitExam();
// 	})
// 以上为原Jquery方式

//该Js为采用anjular-ui-router方法，来进行页面转换

//定义自己的module(routerApp)
//中括号中的是这个module的依赖
var app = angular.module('myapp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('navbar', {  //路由状态
            url: '/:typeCode',  //路由路径
            templateUrl: 'navbar.html',  //路由填充的模板
            controller: 'navbarCtrl' //此处若写controller,则必须指定一个存在的组件,否则页面可能不正常显示
        })
        .state('navbar.main', {  //路由状态
            url: '/main',  //路由路径
            templateUrl: 'main.html',//路由填充的模板
            controller: 'mainCtrl'
            // params:{} //目标页面定义接收参数
        })
        .state('navbar.unitExam', {  //路由状态
            url: '/unitExam', //路由路径
            templateUrl: 'unitExam.html',//路由填充的模板
            controller: 'UnitExamCtrl' //控制器
        });
    // 默认路径，在status中匹配不到时执行
    $urlRouterProvider.otherwise('/navbar/main');
});
// 定义navbarCtrl控制器，对应路由中设置的controller
app.controller('navbarCtrl', function ($scope, $stateParams, $http) {
    // console.log($stateParams.typeCode);
    // $scope.send = function(){
    //     $http({
    //         method: 'POST',
    //         url: '/cpa/unitExam/getUnitExam.do',
    //         params:{'typeCode':'1'}
    //     }).then(function successCallback(response) {
    //         // 请求成功执行代码
    //         alert('success');
    //     }, function errorCallback(response) {
    //         // 请求失败执行代码
    //         alert('error');
    //     })
    //
    // }
    }
);
app.controller('mainCtrl',function($scope){
    $scope.name="kanyun"
});
app.controller('UnitExamCtrl',function($scope){
    // $scope.name="kanyun"
});


