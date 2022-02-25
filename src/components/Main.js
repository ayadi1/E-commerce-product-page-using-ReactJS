import styles from "../css/main.module.css";
import ImageList from "./ImageList";
import InputActions from "./InputActions";

export default function Main({ productCount, sub, add }) {
  return (
    <div className="container">
      <main className={styles.main}>
        <ImageList />
        <div className={styles.infos}>
          <h3>SNEAKER COMPANY</h3>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className={styles.price}>
            <div className={styles.mainPrice}>
              <span className={styles.mainPriceSold}>$125.00</span>
              <span className={styles.mainPriceDes}>50%</span>
            </div>
            <div className={styles.subPrice}>$250.00</div>
          </div>
          <InputActions productCount={productCount} add={add} sub={sub} />
        </div>
      </main>
    </div>
  );
}
