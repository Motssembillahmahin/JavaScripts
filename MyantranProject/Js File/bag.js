const CONVENIECE_FEES = 99;
let bagItemobjects;
onload();
function onload(){
  loadBagItemObjects();
  DislayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItem = bagItemobjects.length ;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;

  bagItemobjects.forEach(bagItem =>{
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  } );
  finalPayment = totalMRP - totalDiscount + CONVENIECE_FEES;
   
  console.log('This is mahin');
  bagSummaryElement.innerHTML = `
      <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMRP}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹${CONVENIECE_FEES}</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
      </div>
    </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>
    `;
  
}

function  loadBagItemObjects(){
  console.log(BagItems);
  bagItemobjects = BagItems.map(itemId =>{
    for (let i = 0;i< items.length; i++){
      if(itemId == items[i].id){
        return items[i]
      }
    }
  });
console.log(bagItemobjects);
}

function DislayBagItems(){
  let ContainerItem = document.querySelector('.bag-items-container');
 let innerhtml = '';
 bagItemobjects.forEach(bagItem => {
  innerhtml += generateItemHTML(bagItem);
 });
 ContainerItem.innerHTML = innerhtml;
}

function removeFromBag(itemId){
  BagItems = BagItems.filter(BagItemId => BagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(BagItems));
    loadBagItemObjects();
    displayBagIcon();
    DislayBagItems();
    displayBagSummary();
  }


function generateItemHTML(item){
  return `<div class="bag-item-container">
  <div class="item-left-part">
    <img class="bag-item-img" src="../${item.image}">
  </div>
  <div class="item-right-part">
    <div class="company">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price-container">
      <span class="current-price">${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount-percentage">(${item.discount_percentage} OFF)</span>
    </div>
    <div class="return-period">
      <span class="return-period-days">${item.return_period} days</span> return available
    </div>
    <div class="delivery-details">
      Delivery by
      <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
  </div>

  <div class="remove-from-cart" onclick = 'removeFromBag(${item.id});'>X</div>
</div>   `
}