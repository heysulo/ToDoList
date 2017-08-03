var app = angular.module('app',[]);
app.controller('ctrl_main',function ($scope) {
    $scope.title = "ToDoList";
    $scope.jobId = 2;

    $scope.filter = "";

    function activeFilter(task) {
        return task.type === 'active';
    }


    $scope.list_task = [{content:'test active',type:'active',id:0},{content:'test completed',type:'completed',id:1}];



    $scope.detectReturn = function (data) {
        if (data.which === 13 && $scope.userdata !== ''){
            $scope.list_task[$scope.jobId] = ({content:$scope.userdata,type:'active',id:$scope.jobId});
            $scope.userdata = '';
            $scope.jobId +=1;

            $scope.updateSubText();
        }
    };

    $scope.removeItem = function(id){
        delete  $scope.list_task[id];
        $scope.updateSubText();
    };

    $scope.markCompleted = function (id) {
        $scope.list_task[id].type="completed";
        $scope.updateSubText();
    };

    $scope.rescheduleTask = function (id) {
        $scope.list_task[id].type="active";
        $scope.updateSubText();
    };

    $scope.updateSubText = function () {
        if ($scope.list_task.filter(activeFilter).length === 0){
            $scope.tasktext = "Good job! You don't have any active tasks."
        }else{
            $scope.tasktext = "You have " + $scope.list_task.filter(activeFilter).length + " active task(s)" ;
        }
    }

    $scope.updateSubText();
});