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
var routerApp = angular.module('myapp', ['ui.router']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('navbar', {  //路由状态
            url: '/navbar',  //路由路径
            templateUrl: 'navbar.html'  //路由填充的模板
        })
        .state('navbar.main', {  //路由状态
            url: '/main',  //路由路径
            templateUrl: 'main.html'  //路由填充的模板
        })
        .state('navbar.unitExam', {  //路由状态
            url: '/unitExam', //路由路径
            templateUrl: 'unitExam.html',//路由填充的模板
            controller: 'UnitExamCtrl' //控制器
        });
    // 默认路径，在status中匹配不到时执行
    $urlRouterProvider.otherwise('/navbar/main');
});