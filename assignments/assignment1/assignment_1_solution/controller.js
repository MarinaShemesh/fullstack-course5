LunchCheck.controller('lunchController', ['$scope', myLunch]);

  function myLunch($scope){
   $scope.message = '';
   $scope.dishes = '';

 
    $scope.checkLunch = function(){
      
      const numberDishes = $scope.dishes.split(',').length;
      console.log(numberDishes);

        if (numberDishes-1 === 0) {
          $scope.message = "Please add your lunch items";
          $scope.messageStyle={'color':'red'};
          $scope.boxStyle = {'border-color': 'red'};
         }
      
        else if (numberDishes < 4 && numberDishes > 0) {
         $scope.message = "Enjoy!";
         $scope.messageStyle={'color':'green'};
         $scope.boxStyle = {'border-color': 'green'};
         }

         else {
         $scope.message = "That is too much!";
         $scope.messageStyle={'color':'green'};
         $scope.boxStyle = {'border-color': 'green'};
         }

 };
}