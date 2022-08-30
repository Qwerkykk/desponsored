(() => {
  itemList = document.getElementById('sku-list').getElementsByTagName("li");

  if(itemList !== null && itemList !== 'undefined'){
    while(itemList[0].classList.contains('sponsored-product') || itemList[0].classList.contains('sponsored-item')){
      for(let i =0; i < 5; i++){
        item = itemList[i];
        if(item.classList.contains('sponsored-product') || item.classList.contains('sponsored-item')){
          item.remove();
        }
      }
      itemList = document.getElementById('sku-list').getElementsByTagName("li");
    }
  }  
})();
