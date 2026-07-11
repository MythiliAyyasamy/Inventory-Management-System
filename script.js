// Product Array
let products = JSON.parse(localStorage.getItem("products")) || [];

// Add Product
function addProduct(){

    let product={
        id:document.getElementById("productId").value,
        name:document.getElementById("productName").value,
        category:document.getElementById("category").value,
        quantity:document.getElementById("quantity").value,
        price:document.getElementById("price").value,
        supplier:document.getElementById("supplier").value
    };

    products.push(product);

    localStorage.setItem("products",JSON.stringify(products));

    alert("Product Added Successfully");

    document.getElementById("productForm").reset();
}

// View Products
function loadProducts(){

    let table=document.getElementById("productTable");

    if(!table) return;

    table.innerHTML="";

    products.forEach(function(p){

        table.innerHTML += `
        <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.category}</td>
        <td>${p.quantity}</td>
        <td>${p.price}</td>
        <td>${p.supplier}</td>
        </tr>
        `;
    });

}

loadProducts();


// Search Product
function searchProduct(){

    let id=document.getElementById("searchId").value;

    let result=products.find(p=>p.id===id);

    if(result){

        document.getElementById("result").innerHTML=`
        <h3>Product Found</h3>
        ID : ${result.id}<br>
        Name : ${result.name}<br>
        Category : ${result.category}<br>
        Quantity : ${result.quantity}<br>
        Price : ₹${result.price}<br>
        Supplier : ${result.supplier}
        `;

    }else{

        document.getElementById("result").innerHTML="Product Not Found";

    }

}


// Update Product
function updateProduct(){

    let id=document.getElementById("updateId").value;

    let product=products.find(p=>p.id===id);

    if(product){

        product.name=document.getElementById("updateName").value;
        product.quantity=document.getElementById("updateQuantity").value;
        product.price=document.getElementById("updatePrice").value;

        localStorage.setItem("products",JSON.stringify(products));

        alert("Product Updated Successfully");

    }else{

        alert("Product Not Found");

    }

}


// Delete Product
function deleteProduct(){

    let id=document.getElementById("deleteId").value;

    products=products.filter(p=>p.id!==id);

    localStorage.setItem("products",JSON.stringify(products));

    alert("Product Deleted Successfully");

}