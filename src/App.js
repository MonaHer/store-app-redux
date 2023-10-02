import ProductsList from "./features/products/ProductsList";
import "./App.css";
import CartList from "./features/products/cart/CartList";

function App() {
  return (
    <div>
      <ProductsList />
      <CartList />
    </div>
  );
}

export default App;
