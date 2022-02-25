import styles from "../css/main.module.css";

export default function InputActions({ productCount, sub, add }) {
  return (
    <div className={styles.actions}>
      <div className={styles.actionsInput}>
        <button onClick={() => add()}>
          <img alt="" src="./images/icon-plus.svg" />
        </button>
        <span>{productCount}</span>
        <button onClick={() => sub()}>
          <img alt="" src="./images/icon-minus.svg" />
        </button>
      </div>
      <button className={styles.addToCartBtn}>
        <img alt="" src="./images/icon-cart.svg" />
        Add to cart
      </button>
    </div>
  );
}
