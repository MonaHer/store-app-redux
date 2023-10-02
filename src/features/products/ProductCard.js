import Modal from "react-modal";
import { useState } from "react";
import { addToCart } from "./cart/cartSlice";
import { useDispatch } from "react-redux";
export default function ProductCard({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  return (
    <>
      <h2>{product.title}</h2>
      <p>Price: {product.price}€</p>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "auto" }}
      />
      <button onClick={handleOpenModal}>Show Info</button>
      <button onClick={handleAddToCart}>Add to cart</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Info Modal"
      >
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <button onClick={handleCloseModal}>Close Info</button>
      </Modal>
    </>
  );
}
