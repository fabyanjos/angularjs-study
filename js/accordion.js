var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions, editableThemes) {
  editableThemes.bs3.inputClass = 'input-sm';
  editableOptions.theme = 'bs3';
});

app.controller('AccordionCtrl', function($scope, $http, $timeout) {
  $http.get("js/stocks.json")
  .success(function(data) {
    $scope.stocks = data;
    $timeout(function() {
      $( "#accordion" ).accordion({
        heightStyle: "content"
      });
    }, 5);
  });
  
  $scope.priorities = [
    {value: 1, text: '1'},
    {value: 2, text: '2'},
    {value: 3, text: '3'}
  ];

  $scope.updatePriority = function(product, data) {
    // Call update api return $http.post('/product/update', {id: product.id, priority: data});
  };
  $scope.updatePrice = function(product, data) {
    // Call update api $http.post('/product/update', {id: product.id, price: data});
  };
  $scope.updateQuantity = function(product, data) {
    // Call update api $http.post('/product/update', {id: product.id, quantity: data});
  };
});