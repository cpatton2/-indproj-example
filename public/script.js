/*    Project:  Individual Project Chapter 2 
      Author:
      Date:
      Purpose:
      
      
      adding the functions in order to  be able to get the subtotal 
*/ 

function calcTotal(){
  var itemTotal = 0;
  var item1 = document.getElementById("item1");
   var item2 = document.getElementById("item2");
   var item3 = document.getElementById("item3");
   var item4 = document.getElementById("item4");
   var item5 = document.getElementById("item5");
   var item6 = document.getElementById("item6");
   var item7 = document.getElementById("item7");
   var item8 = document.getElementById("item8");
   var item9 = document.getElementById("item9");
   var item10 = document.getElementById("item10");
   var item11 = document.getElementById("item11");
   var item12 = document.getElementById("item12");
   var item13 = document.getElementById("item13");
   var item14 = document.getElementById("item14");
   var item15 = document.getElementById("item15");
   var item16 = document.getElementById("item16");
   var item17 = document.getElementById("item17");
   var item18 = document.getElementById("item18");
   var item19 = document.getElementById("item19");
   var item20 = document.getElementById("item20");
   var item21 = document.getElementById("item21");
   var item22 = document.getElementById("item22");
   var item23 = document.getElementById("item23");
   var item24 = document.getElementById("item24");
  (item1.checked) ? (itemTotal +=3.50) : (itemTotal += 0);
    (item2.checked) ? (itemTotal +=3.50) : (itemTotal += 0);
    (item3.checked) ? (itemTotal +=3.50) : (itemTotal += 0);
  (item4.checked) ? (itemTotal +=4.00) : (itemTotal += 0);
    (item5.checked) ? (itemTotal +=4.00) : (itemTotal += 0);
  (item6.checked) ? (itemTotal +=3) : (itemTotal += 0);
    (item7.checked) ? (itemTotal +=3) : (itemTotal += 0);
    (item8.checked) ? (itemTotal +=3) : (itemTotal += 0);
  (item9.checked) ? (itemTotal +=3) : (itemTotal += 0);
    (item10.checked) ? (itemTotal +=3) : (itemTotal += 0);
  (item11.checked) ? (itemTotal +=3) : (itemTotal += 0);
    (item12.checked) ? (itemTotal +=3) : (itemTotal += 0);
    (item13.checked) ? (itemTotal +=5) : (itemTotal += 0);
  (item14.checked) ? (itemTotal +=5) : (itemTotal += 0);
    (item15.checked) ? (itemTotal +=6) : (itemTotal += 0);
  (item16.checked) ? (itemTotal +=6) : (itemTotal += 0);
    (item17.checked) ? (itemTotal +=5) : (itemTotal += 0);
    (item18.checked) ? (itemTotal +=5) : (itemTotal += 0);
  (item19.checked) ? (itemTotal +=5) : (itemTotal += 0);
    (item20.checked) ? (itemTotal +=7) : (itemTotal += 0);
  (item21.checked) ? (itemTotal +=6) : (itemTotal += 0);
    (item22.checked) ? (itemTotal +=5) : (itemTotal += 0);
    (item23.checked) ? (itemTotal +=4.50) : (itemTotal += 0);
  (item24.checked) ? (itemTotal +=5) : (itemTotal += 0);
  var salesTaxRate = 0.06;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  var orderToal = orderTotal.toFixed(2);
  alert("Your order total is $" + orderTotal);
  
    
}

document.getElementById("submit").addEventListener("click", calcTotal, false);