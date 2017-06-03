var app = angular.module("myapp",[]);
app.controller("mycontrolador",function($scope){
	$scope.cantidad="";
  $scope.cuenta = function(){
    console.log("hola");
    console.log($scope.lista);
    if (!$scope.lista) {
      $scope.cantidad ="Please enter data first";
    }else{
      var num = $scope.lista.split(",").length;
      console.log(num);
      if (num<4){
        $scope.cantidad ="Enjoy!";
      }else{
        $scope.cantidad ="Too much!"
      }
    }
  };
});
