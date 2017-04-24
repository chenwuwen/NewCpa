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
