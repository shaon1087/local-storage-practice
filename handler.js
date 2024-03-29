const addProduct = () => {
  const itemField = document.getElementById("Item-input");
  const quantityField = document.getElementById("Quantity-input");

  const item = itemField.value;
  const quantity = quantityField.value;

  itemField.value = "";
  quantityField.value = "";

  displayProduct(item, quantity);
  saveShoppingCart(item, quantity);
};

const displayProduct = (item, quantity) => {
  const outputField = document.getElementById("output");
  const li = document.createElement("li");
  li.innerText = `${item} ${quantity}`;
  outputField.appendChild(li);
};

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart =  localStorage.getItem("cart");
    if (storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
};

const saveShoppingCart = (item, quantity) => {
  const cart = getStoredShoppingCart();
  cart[item] = quantity;
  console.log(cart);
};
