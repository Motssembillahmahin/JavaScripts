
let BagItems = [];
load();
function load (){
  let bagItemstr = localStorage.getItem('bagItems');
  BagItems = bagItemstr ? JSON.parse(bagItemstr) : [];
  displayItemToHomePage();
  displayBagIcon();
}


function addToBag(itemID){
  BagItems.push(itemID);
  localStorage.setItem('bagItems', JSON.stringify(BagItems));
  displayBagIcon();
}
function displayBagIcon(){
  let bagItemCountItem = document.querySelector('.bag-item-count');
  if (BagItems.length > 0 ){
    bagItemCountItem.style.visibility = 'visible';
    bagItemCountItem.innerText = BagItems.length;
  } else{
    bagItemCountItem.style.visibility = 'hidden';
  }
  
}


function displayItemToHomePage(){
  let ItemContainerElements = document.querySelector('.items-container');
  
  if (! ItemContainerElements){
    return;
  }
  let innerHtml = '';
items.forEach(item => {
  innerHtml += `
  <div class="item-container">
  <img class="item-image" src="${item.image}" alt="item image" >
  <div class="rating"> ${item.rating.stars}⭐|  ${item.rating.count} </div>
  <div class="company-name">"${item.company}</div>
  <div class="item-name">"${item.item_name}l</div>
  <div class="price">
      <span class="current-price">Rs. "${item.current_price}</span>
      <span class="orginal-price">"${item.original_price}</span>
      <span class="discount"          >("${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" 
  onclick = "addToBag(${item.id});" >Add to button</button>
</div>`
});
ItemContainerElements.innerHTML = innerHtml;
}
