var prodactNameInput = document.getElementById("prodactName");
var prodactPriceInput = document.getElementById("prodactPrice");
var prodactCategoryInput = document.getElementById("category");
var prodactDescInput = document.getElementById("desc");
var prodactImgInput = document.getElementById("prodactImg");
var serchInput = document.getElementById("serchInput");
var addBtn = document.getElementById("addbtn");
var updatebtn = document.getElementById("updatebtn")
var prodactContainer;
if(localStorage.getItem("products") == null){
    prodactContainer=[];
}else{
    prodactContainer = JSON.parse(localStorage.getItem("products"));
    displayProducts()
}
function addProdact(){
    var prodact = {
        image:`images/${prodactImgInput.files[0].name}`,
        code:prodactNameInput.value,
        price:prodactPriceInput.value,
        category:prodactCategoryInput.value,
        desc:prodactDescInput.value,
    }
    prodactContainer.push(prodact);
    console.log(prodactContainer);
    clearForm()
    displayProducts()   
    localStorage.setItem('products',JSON.stringify(prodactContainer));
}
function clearForm(){
    prodactNameInput.value = null
    prodactPriceInput.value = null
    prodactCategoryInput.value = null
    prodactDescInput.value = null
    prodactImgInput.value = null
}
function displayProducts(){
    var cartona = ``
    for(var i=0;i<prodactContainer.length;i++){
        cartona += `<div class="col-md-3">
        <div class="product rounded">
            <img class="w-100" src="${prodactContainer[i].image}">
            <div class="descreption p-3">
                <h2 class="h4 mt-3"><span class="fw-bolder">Name : </span>${prodactContainer[i].code}</h2>
                <h3 class="h5"><span class="fw-bolder">Price :</span>${prodactContainer[i].price}</h3>
                <h3 class="h5"><span class="fw-bolder">Category :</span>${prodactContainer[i].category}</h3>
                <p class="h5 mb-3"><span class="fw-bolder">Description :</span>${prodactContainer[i].desc}</p>
                <button onclick="editProdact(${i})" class="btn btn-outline-warning d-block w-100 mb-2">Edit <i class="fa-solid fa-pen-alt"></i></button>
                <button onclick="deletePordact(${i})" class="btn btn-outline-danger d-block w-100 mb-2">Delete <i class="fa-solid fa-trash-alt"></i></button>
            </div>
        </div>
    </div>`;
    }
    document.getElementById("rowData").innerHTML = cartona;
}

function deletePordact(deletedIndex){
    prodactContainer.splice(deletedIndex,1);
    localStorage.setItem('products',JSON.stringify(prodactContainer));
    displayProducts(); 
}

function serchProducts(){
    var term = serchInput.value;
    var cartona = ``;
    for(var i = 0;i<prodactContainer.length;i++){
        if(prodactContainer[i].code.toLowerCase().includes(term.toLowerCase()) == true ){
            cartona += `<div class="col-md-3">
            <div class="product rounded">
                <img class="w-100" src="${prodactContainer[i].image}">
                <div class="descreption p-3">
                    <h2 class="h4 mt-3"><span class="fw-bolder">Name : </span>${prodactContainer[i].code}</h2>
                    <h3 class="h5"><span class="fw-bolder">Price :</span>${prodactContainer[i].price}</h3>
                    <h3 class="h5"><span class="fw-bolder">Category :</span>${prodactContainer[i].category}</h3>
                    <p class="h5 mb-3"><span class="fw-bolder">Description :</span>${prodactContainer[i].desc}</p>
                    <button onclick="editProdact(${i})" class="btn btn-outline-warning d-block w-100 mb-2">Edit <i class="fa-solid fa-pen-alt"></i></button>
                    <button onclick="deletePordact(${i})" class="btn btn-outline-danger d-block w-100 mb-2">Delete <i class="fa-solid fa-trash-alt"></i></button>
                </div>
            </div>
        </div>`;
    }
}
    document.getElementById("rowData").innerHTML = cartona;
}
var updateindex;
function editProdact(editindex){
    console.log('hi');
    addBtn.classList.add("d-none")
    updatebtn.classList.remove("d-none")
    prodactNameInput.value = prodactContainer[editindex].code;
    prodactPriceInput.value = prodactContainer[editindex].price;
    prodactCategoryInput.value = prodactContainer[editindex].category;
    prodactDescInput.value = prodactContainer[editindex].desc;
    // prodactImgInput.value = prodactContainer[editindex].img;
    updateindex = editindex;
}
function updateProdact(){
    addBtn.classList.remove("d-none")
    updatebtn.classList.add("d-none")
    prodactContainer[updateindex].code = prodactNameInput.value;
    prodactContainer[updateindex].price = prodactPriceInput.value;
    prodactContainer[updateindex].category = prodactCategoryInput.value;
    prodactContainer[updateindex].desc = prodactDescInput.value;
    displayProducts()
    localStorage.setItem('products',JSON.stringify(prodactContainer));
    clearForm()
}