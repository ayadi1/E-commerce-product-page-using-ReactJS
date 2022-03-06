import styles from "../css/DisplayProduct.module.css";
import ImageList from "./ImageList";
export default function DisplayProduct({ showProduct }) {
  return (
    <div id="DisplayProduct" className={styles.DisplayProduct}>
      <ImageList isInDisplayProduct={true} showProduct={showProduct} />
    </div>
  );
}
