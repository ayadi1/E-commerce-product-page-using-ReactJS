import styles from "../css/cart.module.css";
export default function Cart({ productCount }) {
  let showProductInCart = false;
  if (productCount > 0) {
    showProductInCart = true;
  } else {
    showProductInCart = false;
  }

  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
      <div className={styles.hr}></div>
      <div className={styles.items}>
        {showProductInCart && (
          <div className={styles.item}>
            <img
              alt=""
              src="./images/image-product-1-thumbnail.jpg"
              className={styles.productImage}
            />
            <div className={styles.infos}>
              <h4 className="">Fall Limited Edition Sneakers</h4>
              <p>
                $125.00 x {`${productCount}`}{" "}
                <span>${(125 * productCount).toFixed(2)}</span>
              </p>
            </div>
            <img
              alt=""
              src="./images/icon-delete.svg"
              className={styles.deleteImage}
            />
          </div>
        )}
      </div>
      <button className={styles.btn}>Checkout</button>
    </div>
  );
}
