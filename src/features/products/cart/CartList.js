import { removeFromCart } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);

  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
  }

  function calculateTotalPrice() {
    return cartItems.reduce((total, product) => total + product.price, 0);
  }

  return (
    <>
      <h2>Shopping cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                {product.title}
                <button onClick={() => handleRemoveFromCart(product)}>
                  Remove from cart
                </button>
              </li>
            ))}
          </ul>
          <p>Price in total: {calculateTotalPrice()}€</p>
        </>
      )}
    </>
  );
}
