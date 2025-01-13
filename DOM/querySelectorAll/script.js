//Select all product card
const productCardEls=document.querySelectorAll('.product-card');
console.log(productCardEls);

//Extract and log names of all products
const productNameEls=document.querySelectorAll(".product-name");

productNameEls.forEach((el)=>{
    console.log(el.innerHTML);
    
});

//Select the log all prices of laptop category products
const laptopPricesEl=document.querySelectorAll("[data-category='laptop'] .product-price");

const aaEl=document.getElementById('aa');
laptopPricesEl.forEach((el)=>{
    console.log(el.textContent);
    aaEl.textContent=el.innerHTML;
});

//Select all products with a rating above 4.6
const highestRatingsEl=document.querySelectorAll('[data-rating="4.7"],[data-rating="4.8"]');
console.log(highestRatingsEl);

highestRatingsEl.forEach((el)=>console.log(el.innerHTML));
