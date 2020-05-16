export default function addToCart(title, price, id) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const itemIndex = cartItems.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity += 1;
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems),
    );
  } else {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([...cartItems, { title, id, price, quantity: 1 }])
    );
  }
}
