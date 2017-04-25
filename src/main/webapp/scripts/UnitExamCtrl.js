/**
 * Created by KANYUN on 2017/4/17.
 */

app.controller('UnitExamCtrl',function($scope, $stateParams, $http){
    $scope.typeCode = $stateParams.typeCode;
    var typeCode = $stateParams.typeCode;
    $http({
        method: 'GET',
        url: '/cpa/unitExam/getUnitExam.do',
        // data:{'typeCode':typeCode}
        params:{typeCode:typeCode}
    }).then(function successCallback(response) {
        // 请求成功执行代码
        $scope.exams = response.data;
    }, function errorCallback(response) {
        // 请求失败执行代码
        alert('error');
    })
});
app.filter('ABCDEFGH',function () { //可以注入依赖
    return function (x) {
        switch (x){
            case 0:
                return 'A';
            case 1:
                return 'B';
            case 2:
                return 'C';
            case 3:
                return 'D';
            case 4:
                return 'E';
            case 5:
                return 'F';
            case 6:
                return 'G';
            case 7:
                return 'H';
        }
    }
});
