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

//该Js为采用anjular-ui-router组件，来进行页面转换

//定义自己的module(app),括号中的是这个module的依赖
var app = angular.module('myapp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('navbar', {  //路由状态
            url: '/navbar',  //路由路径
            templateUrl: 'navbar.html',  //路由填充的模板
            controller: 'navbarCtrl' //此处若写controller,则必须指定一个存在的组件,否则页面可能不正常显示
            // resolve:{}
        })
        .state('navbar.main', {
            // abstract: true, //abstract属性是用来定义抽象路由的，在路由的嵌套定义的时候会使用到，不涉及路由嵌套时，须去掉该设置，否则会造成模板不加载
            url: '/main',
            params:{typeCode:null},  // 定义一个空对象，接收数据，同样也可以传递普通参数，但都不会在url上显示
            templateUrl: 'main.html',
            controller: 'mainCtrl'
        })
        .state('navbar.unitExam', {
            url: '/unitExam/:typeCode',
            templateUrl: 'unitExam.html',
            controller: 'UnitExamCtrl'
        });
    // 默认路径，在status中匹配不到时执行
    $urlRouterProvider.otherwise('/navbar/main');
});
// 定义navbarCtrl控制器，对应路由中设置的controller
app.controller('navbarCtrl', function ($scope, $stateParams, $http) {
    // $scope.typeCode = $stateParams.typeCode;
    // $http({
    //         method: 'GET',
    //         url: '/cpa/unitExam/getUnitExam.do',
    //         // data:{'typeCode':typeCode}
    //         // params:{typeCode:typeCode}
    //     }).then(function successCallback(response) {
    //         // 请求成功执行代码
    //         $scope.exams = response.data;
    //         console.log(response.data)
    //     }, function errorCallback(response) {
    //         // 请求失败执行代码
    //         alert('error');
    //     })
    //
    }
);
app.controller('mainCtrl',function($scope){
    $scope.name="kanyun"
});



