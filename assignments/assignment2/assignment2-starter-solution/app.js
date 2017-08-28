'use strict'

angular.module('ShoppingListCheckOff', [])
  .controller('BuyController', BuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

BuyController.$inject = ['ShoppingListCheckOffService'];
function BuyController(ShoppingListCheckOffService){

  const list1 = this;

  list1.items = ShoppingListCheckOffService.getItems();

  list1.buyItem = function(itemIndex){
  ShoppingListCheckOffService.buyItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

  const list2 = this;
  list2.bought = ShoppingListCheckOffService.boughtItem();
}


//service

function ShoppingListCheckOffService(){
  const service = this;

  const items = [
                     { name: "rice", quantity: "1 bag" },
                     { name: "apples", quantity: "2 bags" },
                     { name: "bread", quantity: "2 loaves" },
                     { name: "milk", quantity: "1 carton" },
                     { name: "eggs", quantity: "1 dozen" }

                     ];

  const bought = [];

  service.getItems = function(){
     return items;
   };

  service.buyItem = function(itemIndex){
    bought.push(items.splice(itemIndex, 1)[0]);
  };

   service.boughtItem = function(itemIndex){
    return bought;
  };

}

