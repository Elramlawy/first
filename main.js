



//CRUDS  create,retive,update,delete,serach

//stroage ==> front  [session,local]

//global

var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCatInput = document.getElementById('productCat');
var productDescInput = document.getElementById('productDesc');
var tableRow = document.getElementById('tableRow')
var btn = document.getElementById('btn')
var productArr = [];
if (localStorage.getItem('products') != null) {
   productArr = JSON.parse(localStorage.getItem('products'))
   display(productArr)
}

btn.onclick = function () {
   if (btn.innerHTML == 'add Product')
      addProduct()
   else
      finalEdit()
   // clearForm()
}
function addProduct() {
   var product = {
      productName: productNameInput.value,
      productPrice: productPriceInput.value,
      productCat: productCatInput.value,
      productDesc: productDescInput.value
   }
   productArr.push(product);
   localStorage.setItem('products', JSON.stringify(productArr))
   display(productArr)
}


function display(list) {
   var box = '';
   for (var i = 0; i < list.length; i++) {
      box += `
         <tr>
         <td>${i + 1}</td>
         <td>${list[i].productName}</td>
         <td>${list[i].productPrice}</td>
         <td>${list[i].productCat}</td>
         <td>${list[i].productDesc}</td>
         <td><button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button></td>
         <td><button class="btn btn-info" onclick="updateFun(${i})">update</button></td>
      </tr>
   `
   }
   tableRow.innerHTML = box
}

function clearForm() {
   productNameInput.value = '';
   productPriceInput.value = '';
   productCatInput.value = '';
   productDescInput.value = '';
}

function deleteItem(index) {
   productArr.splice(index, 1)
   localStorage.setItem('products', JSON.stringify(productArr))
   display(productArr)
}




function search(term) {
   var searchedArr = []
   for (var i = 0; i < productArr.length; i++) {
      if (productArr[i].productName.toLowerCase().includes(term.toLowerCase())) {
         searchedArr.push(productArr[i])
      }
   }
   display(searchedArr)
}
var globalIndex;
function updateFun(index) {
   globalIndex = index
   productNameInput.value = productArr[index].productName;
   productPriceInput.value = productArr[index].productPrice;
   productCatInput.value = productArr[index].productCat;
   productDescInput.value = productArr[index].productDesc;
   btn.innerHTML = 'update'
}

function finalEdit() {
   
   productArr[globalIndex].productName = productNameInput.value;
   productArr[globalIndex].productPrice = productPriceInput.value;
   productArr[globalIndex].productCat = productCatInput.value;
   productArr[globalIndex].productDesc = productDescInput.value;
   localStorage.setItem('products', JSON.stringify(productArr))
   display(productArr);
   btn.innerHTML = 'add Product'
}

function nameValed(){
   var regex=/^[A-Z] [a-z][0-9]$/
}







