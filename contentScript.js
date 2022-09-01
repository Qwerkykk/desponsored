(() => {

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'NEW') {
        RemoveSponsoredItems();
      }
  });

  function RemoveSponsoredItems(){
    itemList = document.getElementById('sku-list').getElementsByTagName("li");

    if(itemList !== null && itemList !== 'undefined'){
      for(let i =0;  i < itemList.length && i < 5; i++){
        if(itemList[i].classList.contains('sponsored-product') || itemList[i].classList.contains('sponsored-item')){
          itemList[i].setAttribute("style", "display:none");
        }
      }
    }
  } 
  
})();
