const addProduct = ()=>{
    const itemField = document.getElementById("Item-input");
    const quantityField = document.getElementById("Quantity-input");
    const item = itemField.value;
    const quantity = quantityField.value;
      itemField.value = "";
      quantityField.value = "";

    const outputField = document.getElementById("output");
    console.log(item, quantity);
  
    displayProduct(item, quantity);

    

}

const displayProduct = (item,quantity)=>{
      const outputField = document.getElementById("output");
         const li = document.createElement("li");
         li.innerText = `${item} ${quantity}`;

         outputField.appendChild(li);
}

